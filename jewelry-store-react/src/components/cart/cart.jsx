import "./cart.css";
import React from "react";
import { Link } from "react-router-dom"; // Import Link
import FetchCartItems from "../../api/get-cart-items";
import RemoveCartItem from "../../api/remove-cart-item";
import { CiCircleRemove } from "react-icons/ci";

const Cart = () => {
  const { cartProducts, fetchCartItems } = FetchCartItems();
  const { removeCartItem } = RemoveCartItem();

  const handleRemoval = (productID, cartID) => {
    removeCartItem(productID, cartID, fetchCartItems);
  };

  const handleCheckout = () => {
    if (cartProducts.length === 0) {
      alert("You don't have products in your cart.");
    } else {
      window.location.href="/checkout"
    }
  };

  const cartContent = cartProducts.length > 0 ? (
    <>
      <thead>
        <tr>
          <th className="product-remove"></th>
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
            <td className="product-remove">
              <button
                className="remove-button"
                onClick={() =>
                  handleRemoval(cartProduct.productID, cartProduct.cartID)
                }
              >
                <CiCircleRemove size="30px" />
              </button>
            </td>
            <td className="product-thumbnail">
              <img
                src={cartProduct.imageUrl}
                alt={cartProduct.productName}
                style={{ width: "100px", height: "100px" }}
              />
            </td>
            <td className="product-name">{cartProduct.productName}</td>
            <td className="product-price">${cartProduct.price}</td>
            <td className="product-quantity">
              {cartProduct.productQuantity}
            </td>
            <td className="product-subtotal">
              ${cartProduct.productQuantity * cartProduct.price}
            </td>
          </tr>
        ))}
      </tbody>
    </>
  ) : (
    <tbody>
      <tr>
        <td colSpan="6" style={{ textAlign: "center" }}>
          <strong>No products added</strong>
        </td>
      </tr>
    </tbody>
  );

  return (
    <div id="type-product-container" className="cart">
      <table>{cartContent}</table>

      <div className="cart-buttons">
        <Link className="back-to-products-link" to="/products">
          <button className="back-to-products-button">Back to Products</button>
        </Link>
        {cartProducts.length > 0 && (
          <button className="checkout-button" onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default Cart;
