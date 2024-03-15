<?php
include_once 'db_connection.php';
include_once 'headers.php';

$requestData = json_decode(file_get_contents("php://input"), true);

$userID = $requestData['userID'];

$query = "SELECT cartID FROM cart WHERE userID = '$userID'";
$result = $conn->query($query);

if ($result->num_rows > 0) {
  $row = $result->fetch_assoc();
  $cartID = $row['cartID'];

  $query = "SELECT productID FROM cart_items WHERE cartID = '$cartID'";
  $result = $conn->query($query);

  if ($result->num_rows > 0) {
    $productIDs = array(); // Change variable name to make it clear it's an array

    while ($row = $result->fetch_assoc()) {
      $productIDs[] = $row['productID']; // Store only the productID
    }

    $productIDsStr = implode(",", $productIDs); // Convert array to comma-separated string for the IN clause

    $query = "SELECT * FROM products WHERE productID IN ($productIDsStr)"; // Use IN clause to fetch products
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
      $cartProducts = array();

      while ($row = $result->fetch_assoc()) {
        $cartProducts[] = $row;
      }

      echo json_encode($cartProducts);
    } else {
      echo json_encode(array('message' => 'No products found in the cart'));
    }
  } else {
    echo json_encode(array('message' => 'No items found in the cart'));
  }
} else {
  echo json_encode(array('message' => 'Cart not found for this user'));
}

$conn->close();
?>
