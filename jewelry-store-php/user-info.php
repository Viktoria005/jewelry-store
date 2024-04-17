<?php
include_once 'headers.php';
include_once 'db_connection.php';

$response = [];

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestData = json_decode(file_get_contents("php://input"), true);

    if (isset($requestData['userID'])) {
        // Fetch user data
        $userID = $requestData['userID'];

        $query = "SELECT firstName, lastName FROM users WHERE userID = ?";
        $stmt = $conn->prepare($query);
        $stmt->bind_param("i", $userID);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            $response['userData'] = $row;
            $response['success'] = true;
        } else {
            $response['success'] = false;
            $response['message'] = 'User not found';
        }

        $stmt->close();
    } else {
        $response['success'] = false;
        $response['message'] = 'userID parameter is missing';
    }
} else {
    $response['success'] = false;
    $response['message'] = 'Invalid request method';
}

echo json_encode($response);
$conn->close();
?>
