<?php
include_once 'headers.php';
include_once 'db_connection.php';
 
// Query to select the latest 6 products based on createdAt date
$sql = "SELECT * FROM products ORDER BY createdAt DESC LIMIT 6";
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
