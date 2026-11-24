<?php
require_once __DIR__ . "/../../../db.php";

$i = isset($_POST["i"]) ? intval($_POST["i"]) : 1;
$query = $con->prepare("SELECT numero, nomprenom, datenais FROM eleve LIMIT 0, ?");
$query->bind_param("i", $i);
$query->execute();
$arr = $query->get_result()->fetch_all(MYSQLI_NUM);
echo json_encode($arr);
?>
