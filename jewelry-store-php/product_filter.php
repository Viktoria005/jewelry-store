<?php
include_once 'headers.php';
include_once 'db_connection.php';

$filters = array();

if(isset($_GET['type'])) {
    $type = $_GET['type'];
    $typeQuery = "SELECT categoryID FROM categories WHERE categoryName = ?";
    $stmt = $conn->prepare($typeQuery);
    $stmt->bind_param("s", $type);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        $categoryID = $row['categoryID'];
        
        $filters[] = "categoryID = $categoryID";
    } else {
        echo json_encode(array("message" => "No category found for the given type"));
        exit; 
    }
}

if(isset($_GET['material'])) {
    $material = $_GET['material'];
    $filters[] = "material = '$material'";
}

if(isset($_GET['price'])) {
    $price = $_GET['price'];
    if ($price === "DescendingOrder") {
        $orderBy = "ORDER BY price DESC";
    } elseif ($price === "Ascending") {
        $orderBy = "ORDER BY price ASC";
    }
}

$whereClause = '';
if (!empty($filters)) {
    $whereClause = 'WHERE ' . implode(' AND ', $filters);
}

$orderBy = isset($orderBy) ? $orderBy : '';

$sql = "SELECT * FROM products $whereClause $orderBy";

if (empty($filters)) {
    $sql = "SELECT * FROM products $orderBy";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $products = array();
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    
    echo json_encode($products);
} else {
    echo json_encode(array("message" => "No products found for given filters"));
}

$conn->close();
?>
