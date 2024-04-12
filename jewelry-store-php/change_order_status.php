<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestData = json_decode(file_get_contents("php://input"), true);

    $orderID = $requestData['orderID'];
    $currentStatus = $requestData["currentStatus"];

    $sql = "UPDATE orders SET currentStatus = ? WHERE orderID = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("si", $currentStatus, $orderID);
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Order placed successfully!";
    } else {
        echo "Failed to place order.";
    }
} else {
    echo "Invalid request.";
}
?>