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
    $productIDs = json_encode($requestData["productIDs"]); 
    $quantities = json_encode($requestData["quantities"]); 
    $totalPrice = $requestData['totalPrice'];
    $paymentMethod = $requestData['paymentMethod'];

    $sql = "INSERT INTO orders (userID, productIDs, quantities, firstName, lastName, phoneNumber, address, totalPrice, paymentMethod) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("issssisds", $userID, $productIDs, $quantities, $firstName, $lastName, $phoneNumber, $address, $totalPrice, $paymentMethod);
    
    $stmt->execute();

    if ($stmt->affected_rows > 0) {
        echo "Order placed successfully!";
    } else {
        echo "Failed to place order.";
    }
} else {
    echo "Invalid request.";
}
?>