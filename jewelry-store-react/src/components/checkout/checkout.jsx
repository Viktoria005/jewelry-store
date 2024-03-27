import "./checkout.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FetchCartItems from "../../api/get-cart-items";

const Checkout = () => {
  const { cartProducts } = FetchCartItems();
  const userID = sessionStorage.getItem("userID");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Extracting product IDs and quantities
      const productIDs = cartProducts.map((product) => product.productID);
      const quantities = cartProducts.map((product) => product.productQuantity);

      let totalPrice = 0;
      cartProducts.forEach((product) => {
        totalPrice += product.price * product.productQuantity;
      });

      // Sending data to PHP file
      const response = await axios.post(
        "http://localhost/jewelry-store/jewelry-store-php/checkout.php",
        {
          ...formData,
          productIDs: productIDs,
          quantities: quantities,
          totalPrice: totalPrice,
          userID,
        }
      );
      console.log(response.data); // Handle response as needed
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-content">
        <div className="cart-container">
          <div className="checkout-summary">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th className="product-name">Product</th>
                  <th className="product-quantity">Quantity</th>
                  <th className="product-subtotal">Total</th>
                </tr>
              </thead>
              <tbody>
                {cartProducts.map((cartProduct) => (
                  <tr key={cartProduct.cartItemID}>
                    <td className="product-thumbnail">
                      <img
                        src={cartProduct.imageUrl}
                        alt={cartProduct.productName}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </td>
                    <td className="product-name">
                      {cartProduct.productName}
                    </td>
                    <td className="product-quantity">
                      {cartProduct.productQuantity}
                    </td>
                    <td className="product-subtotal">
                      ${cartProduct.productQuantity * cartProduct.price}
                    </td>
                  </tr>
                ))}
                <tr>
                  <td></td>
                  <td></td>
                  <td>
                    <strong>Total price:</strong>
                  </td>
                  <td>
                    <strong>
                      $
                      {cartProducts.reduce(
                        (total, cartProduct) =>
                          total +
                          cartProduct.price * cartProduct.productQuantity,
                        0
                      )}
                    </strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              id="first-name"
              name="firstName"
              value={formData.firstName}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              id="last-name"
              name="lastName"
              value={formData.lastName}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="text"
              id="phone-number"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleFormChange}
              required
            />
          </div>
          <div className="checkout-buttons">
            <button type="submit" className="purchase">
              Purchase
            </button>
            <Link className="back-to-cart-link" to="/cart">
              <button className="back-to-cart-button">Back to Cart</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
