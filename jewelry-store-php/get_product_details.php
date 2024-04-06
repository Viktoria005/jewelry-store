<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestData = json_decode(file_get_contents("php://input"), true);
    
    $productID = $requestData['productID'];

    $query = "SELECT * FROM products WHERE productID = ?";

    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $productID);
    $stmt->execute();
    
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $response = ['success' => true, 'product' => $row];
    } else {
        $response = ['success' => false, 'message' => 'Product not found'];
    }

    echo json_encode($response);

    $stmt->close();
    $conn->close();
}