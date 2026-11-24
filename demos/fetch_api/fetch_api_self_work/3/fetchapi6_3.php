<?php
require_once __DIR__ . "/../../../db.php";

$action = isset($_POST["action"]) ? $_POST["action"] : "add";

if ($action === "add") {
    $name = filter_input(INPUT_POST, "name", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $dob  = filter_input(INPUT_POST, "dob", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    $mark = filter_input(INPUT_POST, "mark", FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);

    $query = $con->prepare("INSERT INTO eleve (nomprenom, datenais, moyenne) VALUES (?, ?, ?)");
    $query->bind_param("ssd", $name, $dob, $mark);
    $query->execute();
    echo json_encode([$query->affected_rows > 0 ? "1" : "0"]);
    exit;
}

if ($action === "modify") {
    $id = isset($_POST["id"]) ? intval($_POST["id"]) : 0;
    $fields = [];
    $types  = "";
    $params = [];

    if (isset($_POST["name"]) && $_POST["name"] !== "") {
        $fields[] = "nomprenom = ?";
        $types   .= "s";
        $params[] = filter_input(INPUT_POST, "name", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
    if (isset($_POST["dob"]) && $_POST["dob"] !== "") {
        $fields[] = "datenais = ?";
        $types   .= "s";
        $params[] = filter_input(INPUT_POST, "dob", FILTER_SANITIZE_FULL_SPECIAL_CHARS);
    }
    if (isset($_POST["mark"]) && $_POST["mark"] !== "") {
        $fields[] = "moyenne = ?";
        $types   .= "d";
        $params[] = filter_input(INPUT_POST, "mark", FILTER_SANITIZE_NUMBER_FLOAT, FILTER_FLAG_ALLOW_FRACTION);
    }

    if ($id > 0 && count($fields) > 0) {
        $sql = "UPDATE eleve SET " . implode(", ", $fields) . " WHERE numero = ?";
        $types .= "i";
        $params[] = $id;
        $query = $con->prepare($sql);
        $query->bind_param($types, ...$params);
        $query->execute();
        echo json_encode([$query->affected_rows > 0 ? "1" : "0"]);
    } else {
        echo json_encode(["0"]);
    }
    exit;
}

if ($action === "delete") {
    $id = isset($_POST["id"]) ? intval($_POST["id"]) : 0;
    $query = $con->prepare("DELETE FROM eleve WHERE numero = ?");
    $query->bind_param("i", $id);
    $query->execute();
    echo json_encode([$query->affected_rows > 0 ? "1" : "0"]);
    exit;
}
?>
