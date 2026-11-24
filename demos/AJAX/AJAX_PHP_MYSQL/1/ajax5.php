<?php
require_once __DIR__ . "/../../../db.php";

$query = $con->prepare("SELECT cin, nom, adresse, email FROM abonne");
$query->execute();
$result = $query->get_result()->fetch_all(MYSQLI_ASSOC);
echo json_encode($result);
?>
