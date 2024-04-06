<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestData = json_decode(file_get_contents("php://input"), true);

    $userID = $requestData['userID'];

    $sql = "DELETE FROM cart_items WHERE cartID IN (SELECT cartID FROM cart WHERE userID = ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $userID);
    
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Cart items cleared successfully!";
    } else {
        echo "Failed to clear cart items.";
    }
} else {
    echo "Invalid request.";
}
?>
