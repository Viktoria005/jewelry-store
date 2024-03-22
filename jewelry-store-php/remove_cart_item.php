<?php
include_once 'db_connection.php';
include_once 'headers.php';

if (isset($_GET['productID'])) {
  $productID = $_GET['productID'];
  $cartID = $_GET['cartID'];

  $query = "DELETE FROM cart_items WHERE productID = $productID AND cartID = $cartID";

  if ($conn->query($query) === TRUE) {
    echo "Product removed from cart successfully";
  } else {
    echo "Error removing product: " . $conn->error;
  }
} else {
  echo "Cart Item ID not provided";
}

$conn->close();