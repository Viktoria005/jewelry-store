<?php
include('db_connection.php');

function handleLogin($requestData)
{
  global $conn;

  $username = mysqli_real_escape_string($conn, $requestData['username']);
  $pwd = $requestData['pwd'];

  $query = "SELECT userID, pwd FROM users WHERE username = '$username'";
  $result = $conn->query($query);

  if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $hashedPwdFromDB = $row['pwd'];

    if (password_verify($pwd, $hashedPwdFromDB)) {
      return ['success' => true, 'message' => 'Login successful'];
    } else {
      return ['success' => false, 'message' => 'Invalid password'];
    }
  } else {
    return ['success' => false, 'message' => 'Invalid username'];
  }
}