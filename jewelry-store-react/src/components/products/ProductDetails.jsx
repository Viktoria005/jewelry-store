import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import IsAuthenticated from "../../api/is-athenticated";
import AddToCart from "../../api/add-to-cart";

const ProductDetails = () => {
  const { authenticated } = IsAuthenticated();
  const { addToCart, responseMessage } = AddToCart();
  const input = useRef();
  const [cartQty, setCartQty] = useState(1);
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost/jewelry-store/jewelry-store-php/products.php")
      .then((response) => {
        console.log(response.data[productID - 1]);
        setProduct(response.data[productID - 1]);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const addQty = () => {
    if (cartQty < product.stockQuantity) {
      setCartQty((cartQty) => cartQty + 1);
    }
  };

  const removeQty = () => {
    if (cartQty > 1) {
      setCartQty((cartQty) => cartQty - 1);
    }
  };

  const handleAddToCart = () => {
    if (authenticated) {
      addToCart(product.productID, cartQty);
    } else {
      alert("You need to be logged in!");
    }
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.productName} />
      </div>

      <div className="product-info-container">
        <h2>{product.productName}</h2>
        <p>
          Description:
          <br></br>
          <br></br>
          {product.description}
        </p>
        <div className="price-and-buttons">
          <div className="price-container">
            <p>Price: ${product.price}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button onClick={removeQty}>-</button>
            <input
              type="number"
              min="1"
              max={product.stockQuantity}
              step={1}
              value={cartQty}
              ref={input}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                setCartQty(
                  value < 1
                    ? 1
                    : value > product.stockQuantity
                    ? product.stockQuantity
                    : value
                );
              }}
            />
            <button onClick={addQty}>+</button>
          </div>
        </div>
        <button id="add-to-cart-button" onClick={handleAddToCart}>
          Add to Cart
        </button>
        {responseMessage}
      </div>
    </div>
  );
};

export default ProductDetails;
