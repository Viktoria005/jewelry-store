<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $requestData = json_decode(file_get_contents("php://input"), true);

  $productID = $requestData['productID'];
  $categoryID = $requestData['categoryID'];
  $productName = $requestData['productName'];
  $description = $requestData['description'];
  $price = $requestData['price'];
  $imageUrl = $requestData['imageUrl'];
  $stockQuantity = $requestData['stockQuantity'];
  $material = $requestData['material'];

  $query = "UPDATE products SET categoryID = ?, productName = ?, description = ?, price = ?, imageURL = ?, stockQuantity = ?, material = ? WHERE productID = ?";
  $stmt = $conn->prepare($query);
  $stmt->bind_param("issdsisi", $categoryID, $productName, $description, $price, $imageUrl, $stockQuantity, $material, $productID);
  if ($stmt->execute()) {
    $response['success'] = true;
    $response['message'] = "Product updated successfully";
  } else {
    $response['success'] = false;
    $response['message'] = "Failed to update product";
  }
  $stmt->close();
}

echo json_encode($response);

$conn->close();
