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

  $query = "SELECT ci.*, p.* FROM cart_items ci 
            INNER JOIN products p ON ci.productID = p.productID
            WHERE ci.cartID = '$cartID'";
  $result = $conn->query($query);

  if ($result->num_rows > 0) {
    $cartProducts = array();

    while ($row = $result->fetch_assoc()) {
      $row['cartID'] = $cartID;
      $cartProducts[] = $row;
    }

    echo json_encode($cartProducts);
  } else {
    echo json_encode(array('message' => 'No products found in the cart'));
  }
} else {
  echo json_encode(array('message' => 'Cart not found for this user'));
}

$conn->close();
?>
