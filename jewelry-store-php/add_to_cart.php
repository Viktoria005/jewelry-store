<?php
include_once 'headers.php';
include_once 'db_connection.php';

$requestData = json_decode(file_get_contents("php://input"), true);

$userID = $requestData['userID'];
$productID = $requestData['productID'];
$productQuantity = $requestData['cartQty'];

// Check if the product already exists in the cart
$query = "SELECT cartID, productQuantity FROM cart_items WHERE cartID IN (SELECT cartID FROM cart WHERE userID = $userID) AND productID = $productID";
$result = $conn->query($query);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $cartID = $row['cartID'];
    $existingQuantity = $row['productQuantity'];

    // Update the product quantity
    $newQuantity = $existingQuantity + $productQuantity;
    $updateSql = "UPDATE cart_items SET productQuantity = $newQuantity WHERE cartID = $cartID AND productID = $productID";

    if ($conn->query($updateSql) === TRUE) {
        echo "Product quantity updated in cart $cartID";
    } else {
        echo "Error updating cart: " . $conn->error;
    }
} else {
    // Add the product to the cart
    $cartQuery = "SELECT cartID FROM cart WHERE userID = $userID";
    $cartResult = $conn->query($cartQuery);

    if ($cartResult->num_rows > 0) {
        $cartRow = $cartResult->fetch_assoc();
        $cartID = $cartRow['cartID'];

        $insertSql = "INSERT INTO cart_items (cartID, productID, productQuantity) VALUES ('$cartID', '$productID', '$productQuantity')";

        if ($conn->query($insertSql) === TRUE) {
            echo "Product added to cart $cartID";
        } else {
            echo "Error inserting into cart: " . $conn->error;
        }
    } else {
        echo "User does not have a cart.";
    }
}

$conn->close();
?>
