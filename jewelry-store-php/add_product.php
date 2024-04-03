<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestData = json_decode(file_get_contents("php://input"), true);
    
    $categoryID = $requestData['categoryID'];
    $productName = $requestData['productName'];
    $description = $requestData['description'];
    $price = $requestData['price'];
    $imageUrl = $requestData['imageUrl'];
    $stockQuantity = $requestData['stockQuantity'];
    $material = $requestData['material'];

    $query = "INSERT INTO products (categoryID, productName, description, price, imageUrl, stockQuantity, material) 
    VALUES ('$categoryID', '$productName', '$description', '$price', '$imageUrl', '$stockQuantity', '$material')";

    if ($conn->query($query) === TRUE) {
        $response = ['success' => true, 'message' => 'New record created successfully'];
    } else {
        $response = ['success' => false, 'message' => "Error: " . $query . "<br>" . $conn->error];
    }

    $conn->close();

    echo json_encode($response);
}
?>
