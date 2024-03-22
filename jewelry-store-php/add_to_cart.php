<?php
include_once 'headers.php';
include_once 'db_connection.php';

$requestData = json_decode(file_get_contents("php://input"), true);

$userID = $requestData['userID'];
$productID = $requestData['productID'];
$productQuantity = $requestData['cartQty'];

$query = "SELECT cartID FROM cart WHERE userID = $userID";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $cartID = $row['cartID'];

    $sql = "INSERT INTO cart_items (cartID, productID, productQuantity) VALUES ('$cartID', '$productID', '$productQuantity')";

    if ($conn->query($sql) === TRUE) {
        echo "Product successfully inserted into cart $cartID";
    } else {
        echo "Error updating cart: " . $conn->error;
    }
}

$conn->close();
