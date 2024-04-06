<?php
include_once 'headers.php';
include_once 'db_connection.php';
 
$sql = "SELECT * FROM products ORDER BY createdAt DESC LIMIT 6";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $products = array();
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }

    echo json_encode($products);
} else {
    echo json_encode(array("message" => "No products found"));
}

$conn->close();
?>
