<?php
include_once 'headers.php';
include_once 'db_connection.php';

$servername = "localhost";
$username = "your_username";
$password = "your_password";
$database = "jewelry_store_db"; 

$conn = new mysqli($servername, $username, $password, $database);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

if (isset($_GET['userID'])) {
  $userID = $_GET['userID'];

  $sql = "SELECT firstName, lastName FROM users WHERE userID = ?";

  $stmt = $conn->prepare($sql);
  $stmt->bind_param("i", $userID);

  $stmt->execute();

  $stmt->bind_result($firstName, $lastName);

  if ($stmt->fetch()) {
    echo json_encode(array(
      'firstName' => $firstName,
      'lastName' => $lastName
    ));
  } else {
    echo json_encode(array('error' => 'User not found'));
  }

  $stmt->close();
} else {
  echo json_encode(array('error' => 'UserID parameter is missing'));
}

$conn->close();
?>
