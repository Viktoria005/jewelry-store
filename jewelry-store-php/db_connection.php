 <?php
$servername = 'localhost';
$mysqlusername = "root";
$userpassword = "";
$dbname = "jewelry_store_db";

$conn = new mysqli($servername, $mysqlusername, $userpassword, $dbname);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
} 