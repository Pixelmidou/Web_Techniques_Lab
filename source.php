<?php
// Safely returns raw source code for files inside demos/ without executing PHP.
header("Content-Type: text/plain; charset=UTF-8");

$file = isset($_GET["file"]) ? $_GET["file"] : "";
if ($file === "") {
    http_response_code(400);
    echo "No file requested.";
    exit;
}

$demosDir = realpath(__DIR__ . "/demos");
$target   = realpath(__DIR__ . "/" . ltrim($file, "/\\"));

// Allow only real files strictly inside /demos/
if (
    $demosDir === false ||
    $target === false ||
    !is_file($target) ||
    strpos($target, $demosDir . DIRECTORY_SEPARATOR) !== 0
) {
    http_response_code(403);
    echo "Access denied.";
    exit;
}

// Never expose real database credentials from demos/db.php
if (strtolower(basename($target)) === "db.php") {
    echo "<?php\n";
    echo "// Shared database connection (credentials hidden for security)\n";
    echo "\$DB_HOST = \"YOUR_DB_HOST\";\n";
    echo "\$DB_USER = \"YOUR_DB_USER\";\n";
    echo "\$DB_PASS = \"********\";\n";
    echo "\$DB_NAME = \"YOUR_DB_NAME\";\n\n";
    echo "\$con = new mysqli(\$DB_HOST, \$DB_USER, \$DB_PASS, \$DB_NAME);\n";
    echo "if (\$con->connect_error) {\n";
    echo "    http_response_code(500);\n";
    echo "    die(\"Database connection failed.\");\n";
    echo "}\n";
    echo "\$con->set_charset(\"utf8mb4\");\n";
    echo "?>\n";
    exit;
}

readfile($target);
?>
