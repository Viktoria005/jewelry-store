<?php
include_once 'headers.php';
include_once 'db_connection.php';

// Initialize an empty array to store filters
$filters = array();

// Check if any filter is set for product type
if(isset($_GET['type'])) {
    $type = $_GET['type'];
    // Query the database to get the category ID based on the type
    $typeQuery = "SELECT categoryID FROM categories WHERE categoryName = ?";
    $stmt = $conn->prepare($typeQuery);
    $stmt->bind_param("s", $type);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        // Fetch the category ID
        $row = $result->fetch_assoc();
        $categoryID = $row['categoryID'];
        
        // Add filter condition for product category ID
        $filters[] = "categoryID = $categoryID";
    } else {
        // No category found for the given type
        echo json_encode(array("message" => "No category found for the given type"));
        exit; // Exit script
    }
}

// Check if any filter is set for material
if(isset($_GET['material'])) {
    $material = $_GET['material'];
    $filters[] = "material = '$material'";
}

// Check if any filter is set for price range
if(isset($_GET['price'])) {
    $price = $_GET['price'];
    if ($price === "DescendingOrder") {
        $orderBy = "ORDER BY price DESC";
    } elseif ($price === "Ascending") {
        $orderBy = "ORDER BY price ASC";
    }
}

// Build the WHERE clause based on filters
$whereClause = '';
if (!empty($filters)) {
    $whereClause = 'WHERE ' . implode(' AND ', $filters);
}

// Build the ORDER BY clause
$orderBy = isset($orderBy) ? $orderBy : '';

// Query to select filtered products
$sql = "SELECT * FROM products $whereClause $orderBy";

// If no filters are applied, query all products
if (empty($filters)) {
    $sql = "SELECT * FROM products $orderBy";
}

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch associative array of filtered products
    $products = array();
    while ($row = $result->fetch_assoc()) {
        $products[] = $row;
    }
    
    // Encode products array as JSON and output
    echo json_encode($products);
} else {
    // No products found for given filters
    echo json_encode(array("message" => "No products found for given filters"));
}

$conn->close();
?>
