<?php
include_once 'headers.php';
include_once 'db_connection.php';
 
// Query to select products
$sql = "SELECT * FROM products";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch associative array of products
    $products = array();
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    
    // Encode products array as JSON and output
    echo json_encode($products);
} else {
    // No products found
    echo json_encode(array("message" => "No products found"));
}

$conn->close();
?>
