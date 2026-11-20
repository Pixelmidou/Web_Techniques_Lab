<?php
require_once __DIR__ . "/../../../db.php";

$i = isset($_POST["i"]) ? intval($_POST["i"]) : 0;
$query = $con->prepare("SELECT numero, nomprenom, datenais FROM eleve LIMIT ?, 1");
$query->bind_param("i", $i);
$query->execute();
$arr = $query->get_result()->fetch_all(MYSQLI_NUM);

$query2 = $con->prepare("SELECT COUNT(*) FROM eleve");
$query2->execute();
$arr2 = $query2->get_result()->fetch_array(MYSQLI_NUM);

array_push($arr, $arr2[0]);
echo json_encode($arr);
?>
