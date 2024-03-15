import React from "react";
import FetchCartItems from "../../api/get-cart-items";

const Cart = () => {
    const { cartProducts } = FetchCartItems();

    return (
        <div id="type-product-container" className="products-container">
        <ul className="product-menu">
          {cartProducts.map((cartProduct) => (
            <li key={cartProduct.id} className="product-item">
              <div className="product-content">
                  <img src={cartProduct.imageUrl} alt={cartProduct.productName} />
                  <h3 style={{ color: "#b6d0e2" }}>{cartProduct.productName}</h3>
                <p>Price: ${cartProduct.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default Cart;