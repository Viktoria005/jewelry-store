import React from "react";
import FetchAllOrders from "../../api/get-all-orders";
import "./all-orders.css";

const AllOrders = () => {
  const { orders } = FetchAllOrders();

  return (
    <div className="order-page">
      <h2>Order history</h2>
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Product</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Order date</th>
            <th>Phone number</th>
            <th>Address</th>
            <th>Total price</th>
            <th>Payment method</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index}>
              <td>{order.orderID}</td>
              <td>
                <table>
                  <tbody>
                    {order.orderDetails.map((product, idx) => (
                      <tr key={idx}>
                        <td>
                          <img
                            src={product.imageUrl}
                            alt={product.productName}
                            className="product-image"
                          />
                        </td>
                        <td>{product.productName}</td>
                        <td>{product.quantity}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
              <td>{order.firstName}</td>
              <td>{order.lastName}</td>
              <td>{order.orderDate}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.address}</td>
              <td>${order.totalPrice}</td>
              <td>{order.paymentMethod}</td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllOrders;
