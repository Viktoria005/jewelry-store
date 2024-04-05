import React from "react";
import FetchAllOrders from "../../api/get-all-orders";

const AllOrders = () => {
  const { orders } = FetchAllOrders();
  
  return (
    <div className="order-page">
      <h2>Order history</h2>
      {orders.map((order, index) => (
        <div key={index}>
          <h3>Order ID: {order.orderID}</h3>
          <ul>
            {order.orderDetails.map((product, idx) => (
              <li key={idx}>
                <img
                  src={product.imageUrl}
                  alt={product.productName}
                  style={{ maxWidth: "100px" }}
                />
                <br />
                Product Name: {product.productName}
                <br />
                Quantity: {product.quantity}
                <br />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllOrders;
