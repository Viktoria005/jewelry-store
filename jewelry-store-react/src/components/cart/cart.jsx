import React, { useState, useEffect } from "react";
import FetchCartItems from "../../api/get-cart-items";
import "./cart.css";
import { CiCircleRemove } from "react-icons/ci";

const Cart = () => {
  const { cartProducts } = FetchCartItems();

  // Initialize cartQuantities state with default values
  const initialQuantities = cartProducts.map((product) => ({
    id: product.id,
    quantity: 1
  }));
  const [cartQuantities, setCartQuantities] = useState(initialQuantities);

  // Update cartQuantities when cartProducts change
  useEffect(() => {
    setCartQuantities(initialQuantities);
  }, [cartProducts]);

  const addQty = (index) => {
    const updatedQuantities = [...cartQuantities];
    if (updatedQuantities[index].quantity < cartProducts[index].stockQuantity) {
      updatedQuantities[index].quantity++;
      setCartQuantities(updatedQuantities);
    }
  };

  const removeQty = (index) => {
    const updatedQuantities = [...cartQuantities];
    if (updatedQuantities[index].quantity > 1) {
      updatedQuantities[index].quantity--;
      setCartQuantities(updatedQuantities);
    }
  };

  const handleChange = (e, index) => {
    const value = parseInt(e.target.value);
    const updatedQuantities = [...cartQuantities];
    updatedQuantities[index].quantity = value < 1 ? 1 : value > cartProducts[index].stockQuantity ? cartProducts[index].stockQuantity : value;
    setCartQuantities(updatedQuantities);
  };

  if (!cartProducts) {
    return <div>Loading...</div>;
  }

  return (
    <div id="type-product-container" className="cart">
      <table>
        <thead>
          <tr>
            <th className="product-remove">
              <span className="screen-reader-text"></span>
            </th>
            <th className="product-name" colSpan="2">
              Product
            </th>
            <th className="product-price">Price</th>
            <th className="product-quantity">Quantity</th>
            <th className="product-subtotal">Total</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((cartProduct, index) => (
            <tr key={cartProduct.id}>
              <td className="product-remove">
                <button
                  className="remove-button"
                  // style={{ padding: "20px" }}
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
                <div style={{ display: "flex", flexDirection: "row"}}>
                  <button className="Qty-button" onClick={() => removeQty(index)}>-</button>
                  <input className="Qty-input" style={{width:"30px"}}
                    type="number"
                    min="1"
                    max={cartProduct.stockQuantity}
                    step={1}
                    value={cartQuantities[index]?.quantity || 1}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <button className="Qty-button" onClick={() => addQty(index)}>+</button>
                </div>
              </td>
              <td className="product-subtotal">
                {cartProduct.price * (cartQuantities[index]?.quantity || 1)}$
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
