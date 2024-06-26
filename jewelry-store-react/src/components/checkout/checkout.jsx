import "./checkout.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import FetchCartItems from "../../api/get-cart-items";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";

const Checkout = () => {
  const { cartProducts, fetchCartItems } = FetchCartItems();
  const userID = sessionStorage.getItem("userID");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
  });
  const [purchaseSuccess, setPurchaseSuccess] = useState(false);

  const fetchUserData = async () => {
    try {
      const response = await axios.post(
        `http://localhost/jewelry-store/jewelry-store-php/user-info.php`,
        { userID: userID }
      );
      const { userData, success, message } = response.data;
      if (success) {
        const { firstName, lastName } = userData;
        setFormData((prevData) => ({
          ...prevData,
          firstName,
          lastName,
        }));
      } else {
        console.error("Error fetching user information:", message);
      }
    } catch (error) {
      console.error("Error fetching user information:", error);
    }
  };
  
  useEffect(() => {
    if (userID) {
      fetchUserData();
    }
  }, [userID]);
  
  

  
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    // Only allow numbers and limit to 10 digits
    if (name === "phoneNumber") {
      const formattedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((prevData) => ({
        ...prevData,
        [name]: formattedValue,
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const isFormFilled = () => {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.phoneNumber.trim() !== "" &&
      formData.address.trim() !== ""
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isFormFilled()) {
        const productIDs = cartProducts.map((product) => product.productID);
        const quantities = cartProducts.map(
          (product) => product.productQuantity
        );

        let totalPrice = 0;
        cartProducts.forEach((product) => {
          totalPrice += product.price * product.productQuantity;
        });

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
        console.log(response.data);
        await clearCartItems();
        setPurchaseSuccess(true);
      } else {
        console.error("Please fill in all the fields.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const clearCartItems = async () => {
    try {
      await axios.post(
        "http://localhost/jewelry-store/jewelry-store-php/clear_cart.php",
        { userID }
      );
      fetchCartItems();
    } catch (error) {
      console.error("Error clearing cart items:", error);
    }
  };

  const totalPrice = Array.isArray(cartProducts)
    ? cartProducts.reduce(
        (total, cartProduct) =>
          total + cartProduct.price * cartProduct.productQuantity,
        0
      )
    : 0;

  return (
    <div className="checkout-container">
      <h2 className="purchaseSuccess">
        {purchaseSuccess ? "Thank You for Your Purchase!" : "Checkout"}
      </h2>
      {purchaseSuccess ? (
        <div className="checkout-success">
          <p>Your order has been successfully placed.</p>
          <div className="order-success-buttons">
            <Link to="/home">
              <button className="go-home-button">Go to Home</button>
            </Link>
            <Link to="/order">
              <button className="view-your-order-button">
                View your Order
              </button>
            </Link>
          </div>
        </div>
      ) : (
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
                  {Array.isArray(cartProducts) && cartProducts.length > 0 ? (
                    cartProducts.map((cartProduct) => (
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4">No products in the cart</td>
                    </tr>
                  )}
                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <strong>Total price:</strong>
                    </td>
                    <td>
                      <strong>${totalPrice}</strong>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <form className="checkout-form-container" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                id="first-name"
                name="firstName"
                
                value={formData.firstName || ""}
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
                value={formData.lastName || ""}
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
                maxLength={10}
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
              <FormControlLabel
                value="Cash"
                control={<Radio />}
                label="Cash"
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    paymentMethod: "Cash",
                  }))
                }
                checked={formData.paymentMethod === "Cash"}
                required
              />

<FormControlLabel
                value="Card"
                control={<Radio />}
                label="Card"
                onChange={() =>
                  setFormData((prevData) => ({
                    ...prevData,
                    paymentMethod: "Card",
                  }))
                }
                checked={formData.paymentMethod === "Card"}
                required
              />

              <button type="submit" className="purchase">
                Purchase
              </button>
              <Link className="back-to-cart-link" to="/cart">
                <button className="back-to-cart-button">Back to Cart</button>
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
