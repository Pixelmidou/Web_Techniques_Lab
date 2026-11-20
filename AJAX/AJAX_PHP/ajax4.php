<?php
if (isset($_GET["name"])) {
    echo "Your name is : " . htmlspecialchars($_GET["name"], ENT_QUOTES, "UTF-8");
}
if (isset($_POST["fname"]) && isset($_POST["lname"])) {
    echo "Your First Name is : " . htmlspecialchars($_POST["fname"], ENT_QUOTES, "UTF-8")
       . "<br>Your Last Name is : " . htmlspecialchars($_POST["lname"], ENT_QUOTES, "UTF-8");
}
?>
