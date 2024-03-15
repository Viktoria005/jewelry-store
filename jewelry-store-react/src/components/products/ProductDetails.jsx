import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import AddToCart from "../../api/add-to-cart";

const ProductDetails = () => {
  const { addToCart } = AddToCart();
  const handleProduct = (productID, cartQty) => {
    addToCart(productID, cartQty);
  }

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

  if (!product) {
    return <div>Loading...</div>;
  }

  const addQty = () => {
    if (cartQty < product.stockQuantity) {
      // Ensure the cart quantity is greater than 1 before decrementing
      setCartQty((cartQty) => cartQty + 1);
    }
  };

  const removeQty = () => {
    if (cartQty > 1) {
      // Ensure the cart quantity is greater than 1 before decrementing
      setCartQty((cartQty) => cartQty - 1);
    }
  };

  return (
    <div className="product-details-container">
      <div className="product-image-container">
        <img src={product.imageUrl} alt={product.productName} />
      </div>

      <div className="product-info-container">
        <h2>{product.productName}</h2>
        <p>
          Description:
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
        <button id="add-to-cart-button" onClick={() => handleProduct(product.productID, cartQty)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductDetails;
