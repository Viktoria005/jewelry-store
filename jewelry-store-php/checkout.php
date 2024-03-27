<?php
include_once 'headers.php';
include_once 'db_connection.php';

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $requestData = json_decode(file_get_contents("php://input"), true);

    $userID = $requestData['userID'];
    $firstName = $requestData["firstName"];
    $lastName = $requestData["lastName"];
    $phoneNumber = $requestData["phoneNumber"];
    $address = $requestData["address"];
    $productIDs = json_encode($requestData["productIDs"]); // Convert to JSON string
    $quantities = json_encode($requestData["quantities"]); // Convert to JSON string
    $totalPrice = $requestData['totalPrice'];

    // Prepare and bind SQL statement to insert into orders table
    $sql = "INSERT INTO orders (userID, productIDs, quantities, firstName, lastName, phoneNumber, address, totalPrice) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("issssisd", $userID, $productIDs, $quantities, $firstName, $lastName, $phoneNumber, $address, $totalPrice);
    
    // Execute the statement
    $stmt->execute();

    // Check if the insertion was successful
    if ($stmt->affected_rows > 0) {
        echo "Order placed successfully!";
    } else {
        echo "Failed to place order.";
    }
} else {
    echo "Invalid request.";
}
?>