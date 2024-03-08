<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $rawData = file_get_contents("php://input");
  $requestData = json_decode($rawData, true);

  $firstName = $requestData['firstName'];
  $lastName = $requestData['lastName'];
  $username = $requestData['username'];
  $email = $requestData['email'];
  $pwd = password_hash($requestData['pwd'], PASSWORD_DEFAULT);
  $dateOfBirth = $requestData['dateOfBirth'];
  $gender = $requestData['gender'];
  $profileType = $requestData['profileType'];

  $insertUserQuery = "INSERT INTO users (firstName, lastName, username, email, pwd, dateOfBirth, gender, profileType) VALUES ('$firstName', '$lastName', '$username', '$email', '$pwd', '$dateOfBirth', '$gender', '$profileType')";

  if ($conn->query($insertUserQuery) === TRUE) {
    $response = ['success' => true, 'message' => 'New record created successfully'];
  } else {
    $response =  ['success' => false, 'message' => 'Error: ' . $conn->error];
  }

  echo json_encode($response);
}

$conn->close();
