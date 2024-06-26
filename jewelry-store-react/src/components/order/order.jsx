import React from "react";
import FetchOrder from "../../api/get-order";
import "./order.css";
import ChangeOrderStatus from "../../api/change-order-status";

const Order = () => {
  const { orders } = FetchOrder();
  const { changeStatus } = ChangeOrderStatus();

  return (
    <div>
    <div className="orderBackground"></div>
    <div className="orderBody">
    <div className="order-page">
      <h2>Order history</h2>
      {orders.length > 0 ? (
        <table>
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
              <th>Actions</th>
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
                <td>{order.currentStatus}</td>
                <td>
                  <button
                    type="button"
                    className="cancel-status-button"
                    onClick={() => {
                      if (order.currentStatus.toLowerCase() !== "cancelled") {
                        changeStatus(order.orderID, "Cancelled");
                      } else {
                        console.log("Cannot cancel order. Order is already cancelled.");
                      }
                    }}
                    disabled={order.currentStatus.toLowerCase() === "cancelled"}
                  >
                    Cancel Order
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No orders</p>
      )}
      </div>
    </div>
    </div>
  );
};

export default Order;
