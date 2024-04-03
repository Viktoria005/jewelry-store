<?php
include_once 'db_connection.php';
include_once 'headers.php';

if (isset($_GET['productID'])) {
    $productID = $_GET['productID'];
    $cartID = $_GET['cartID'];

    // Retrieve the quantity of the removed item from the cart
    $query = "SELECT productQuantity FROM cart_items WHERE productID = $productID AND cartID = $cartID";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $quantity = $row['productQuantity'];

        // Update the stock quantity in the products table
        $updateQuery = "UPDATE products SET stockQuantity = stockQuantity + $quantity WHERE productID = $productID";
        if ($conn->query($updateQuery) === TRUE) {
            echo "Stock quantity updated successfully. ";
        } else {
            echo "Error updating stock quantity: " . $conn->error;
        }
    } else {
        echo "Product not found in the cart.";
    }

    // Delete the item from the cart
    $deleteQuery = "DELETE FROM cart_items WHERE productID = $productID AND cartID = $cartID";
    if ($conn->query($deleteQuery) === TRUE) {
        echo "Product removed from cart successfully";
    } else {
        echo "Error removing product: " . $conn->error;
    }
} else {
    echo "Cart Item ID not provided";
}

$conn->close();
?>
