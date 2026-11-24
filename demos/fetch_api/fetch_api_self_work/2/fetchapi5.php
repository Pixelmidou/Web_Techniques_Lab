<?php
$i = isset($_POST["i"]) ? htmlspecialchars($_POST["i"], ENT_QUOTES, "UTF-8") : "";
$j = isset($_POST["j"]) ? htmlspecialchars($_POST["j"], ENT_QUOTES, "UTF-8") : "";
echo "Received i = $i, j = $j";
?>
