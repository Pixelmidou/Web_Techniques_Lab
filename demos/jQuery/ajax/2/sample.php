<?php
$txt = isset($_POST["txt"]) ? htmlspecialchars($_POST["txt"], ENT_QUOTES, "UTF-8") : "";
echo $txt;
?>
