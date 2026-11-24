<?php
require_once __DIR__ . "/../../../db.php";

if (isset($_POST["i"]) && isset($_POST["j"])) {
    $i = intval($_POST["i"]);
    $j = $_POST["j"];

    // Whitelist of allowed ORDER BY clauses
    $orderMap = [
        "0" => "numero ASC",
        "1" => "numero DESC",
        "2" => "nomprenom ASC",
        "3" => "nomprenom DESC",
        "4" => "datenais ASC",
        "5" => "datenais DESC",
        "6" => "moyenne ASC",
        "7" => "moyenne DESC"
    ];
    $orderBy = isset($orderMap[$j]) ? $orderMap[$j] : "numero ASC";

    $query_count = $con->prepare("SELECT COUNT(*) FROM eleve");
    $query_count->execute();
    $arrc = $query_count->get_result()->fetch_array(MYSQLI_NUM);

    $query = $con->prepare("SELECT numero, nomprenom, datenais, moyenne FROM eleve ORDER BY $orderBy LIMIT ?, 2");
    $query->bind_param("i", $i);
    $query->execute();
    $arrx = $query->get_result()->fetch_all(MYSQLI_NUM);

    array_push($arrx, $arrc[0]);
    echo json_encode($arrx);
    exit;
}
?>
