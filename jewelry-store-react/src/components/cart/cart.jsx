import "./cart.css";
import React from "react";
import FetchCartItems from "../../api/get-cart-items";
import RemoveCartItem from "../../api/remove-cart-item";
import { CiCircleRemove } from "react-icons/ci";

const Cart = () => {
  const { cartProducts, fetchCartItems } = FetchCartItems();
  const { removeCartItem } = RemoveCartItem();

  const handleRemoval = (productID, cartID) => {
    removeCartItem(productID, cartID, fetchCartItems);
  };

  return (
    <div id="type-product-container" className="cart">
      <table>
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
                  onClick={() => handleRemoval(cartProduct.productID, cartProduct.cartID)} // Pass both cartItemID and cartID
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
              <td className="product-price">{cartProduct.price}$</td>
              <td className="product-quantity">
                {cartProduct.productQuantity}
              </td>
              <td className="product-subtotal">
                ${cartProduct.productQuantity * cartProduct.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
