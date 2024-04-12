<?php
include_once 'db_connection.php';
include_once 'headers.php';

if (isset($_GET['productID'])) {
    $productID = $_GET['productID'];

    $query = "DELETE FROM products WHERE productID = $productID";
    

    if ($conn->query($query) === TRUE) {
        echo "Successfull";
    } else {
        echo "Product not found in the cart.";
    }
} else {
    echo "Product ID not provided";
}

$conn->close();
