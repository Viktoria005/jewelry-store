import "./checkout.css";
import React from "react";
import { Link } from "react-router-dom";
import FetchCartItems from "../../api/get-cart-items";

const Checkout = () => {
  const { cartProducts } = FetchCartItems();

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <div className="checkout-summary">
        <table>
          <thead>
            <tr>
              <th></th>
              <th className="product-name">Product</th>
              <th className="product-price">Price</th>
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
                <td className="product-name">{cartProduct.productName}</td>
                <td className="product-price">{cartProduct.price}$</td>
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
              <td></td>
              <td>
                <strong>Total price:</strong>
              </td>
              <td>
                <strong>
                  $
                  {cartProducts.reduce(
                    (total, cartProduct) =>
                      total + cartProduct.price * cartProduct.productQuantity,
                    0
                  )}
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <form className="checkout-form">
        <div className="form-group">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="firstName" required />
        </div>
        <div className="form-group">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="lastName" required />
        </div>
        <div className="form-group">
          <label htmlFor="phone-number">Phone Number</label>
          <input type="text" id="phone-number" name="phoneNumber" required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input type="text" id="address" name="address" required />
        </div>

        <button type="submit" className="submit-button">
          Place Order
        </button>
      </form>

      <div className="checkout-buttons">
        {/* Add button to go back to Cart */}
        <Link className="back-to-cart-link" to="/cart">
          <button className="back-to-cart-button">Back to Cart</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
