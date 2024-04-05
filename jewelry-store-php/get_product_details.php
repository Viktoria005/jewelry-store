<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestData = json_decode(file_get_contents("php://input"), true);
    
    $productID = $requestData['productID'];

    $query = "SELECT * FROM products WHERE productID = ?";

    // Prepare and execute the statement
    $stmt = $conn->prepare($query);
    $stmt->bind_param("i", $productID); // "i" for integer type
    $stmt->execute();
    
    // Get the result
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // Fetch the result row as an associative array
        $row = $result->fetch_assoc();
        $response = ['success' => true, 'product' => $row];
    } else {
        $response = ['success' => false, 'message' => 'Product not found'];
    }

    // Encode response as JSON and send it
    echo json_encode($response);

    // Close prepared statement and database connection
    $stmt->close();
    $conn->close();
}