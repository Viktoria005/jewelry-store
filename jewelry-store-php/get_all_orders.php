<?php
include_once 'headers.php';
include_once 'db_connection.php';

$sql = "SELECT * FROM orders";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch associative array of orders
    $orders = array();
    while ($row = $result->fetch_assoc()) {
        // Separate product IDs and quantities for each order
        $productIDs = json_decode($row['productIDs'], true);
        $quantities = json_decode($row['quantities'], true);
        
        // Combine product IDs and quantities into an array of pairs
        $orderDetails = array();
        for ($i = 0; $i < count($productIDs); $i++) {
            // Fetch all product details from products table
            $productID = $productIDs[$i];
            $sql_product = "SELECT * FROM products WHERE productID = $productID";
            $result_product = $conn->query($sql_product);
            $product = $result_product->fetch_assoc();
            
            // Add product details to the order details along with quantity
            $product['quantity'] = $quantities[$i];
            $orderDetails[] = $product;
        }
        
        // Add order details to the orders array
        $row['orderDetails'] = $orderDetails;
        unset($row['productIDs']); // Remove the original product IDs array
        unset($row['quantities']); // Remove the original quantities array
        
        $orders[] = $row;
    }
    
    // Encode orders array as JSON and output
    echo json_encode($orders);
} else {
    // No orders found
    echo json_encode(array("message" => "No orders found"));
}

$conn->close();