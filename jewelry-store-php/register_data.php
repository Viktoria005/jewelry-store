<?php
include('db_connection.php');

function handleRegistration($data)
{
    global $conn;

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
        return ['success' => true, 'message' => 'New record created successfully'];
      } else {
        return ['success' => false, 'message' => 'Error: ' . $conn->error];
      }
}