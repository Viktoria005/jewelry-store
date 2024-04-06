<?php
include_once 'headers.php';
include_once 'db_connection.php';
 
$requestData = json_decode(file_get_contents("php://input"), true);

$userID = $requestData['userID'];

$sql = "SELECT * FROM orders WHERE userID = $userID";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $orders = array();
    while ($row = $result->fetch_assoc()) {
        $productIDs = json_decode($row['productIDs'], true);
        $quantities = json_decode($row['quantities'], true);
        
        $orderDetails = array();
        for ($i = 0; $i < count($productIDs); $i++) {
            $productID = $productIDs[$i];
            $sql_product = "SELECT * FROM products WHERE productID = $productID";
            $result_product = $conn->query($sql_product);
            $product = $result_product->fetch_assoc();
            
            $product['quantity'] = $quantities[$i];
            $orderDetails[] = $product;
        }
        
        $row['orderDetails'] = $orderDetails;
        unset($row['productIDs']);
        unset($row['quantities']); 
        
        $orders[] = $row;
    }

    echo json_encode($orders);
} else {
    echo json_encode(array("message" => "No orders found"));
}

$conn->close();