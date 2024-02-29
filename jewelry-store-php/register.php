<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $rawData = file_get_contents("php://input");
  $requestData = json_decode($rawData, true);

  $firstName = $data['firstName'];
  $lastName = $data['lastName'];
  $username = $data['username'];
  $email = $data['email'];
  $pwd = password_hash($data['pwd'], PASSWORD_DEFAULT);
  $dateOfBirth = $data['dateOfBirth'];
  $gender = $data['gender'];
  $profileType = $data['profileType'];

  $insertUserQuery = "INSERT INTO users (firstName, lastName, username, email, pwd, dateOfBirth, gender, profileType) VALUES ('$firstName', '$lastName', '$username', '$email', '$pwd', '$dateOfBirth', '$gender', '$profileType')";

  if ($conn->query($insertUserQuery) === TRUE) {
    $response = ['success' => true, 'message' => 'New record created successfully'];
  } else {
    $response =  ['success' => false, 'message' => 'Error: ' . $conn->error];
  }

  echo json_encode($response);
}

$conn->close();
