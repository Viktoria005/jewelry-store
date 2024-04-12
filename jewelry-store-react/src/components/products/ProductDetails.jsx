import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import IsAuthenticated from "../../api/is-athenticated";
import AddToCart from "../../api/add-to-cart";
import DeleteProduct from "../../api/delete-product";

const ProductDetails = () => {
  const { authenticated } = IsAuthenticated();
  const { addToCart, responseMessage } = AddToCart();
  const { deleteProduct } = DeleteProduct();
  const profileType = sessionStorage.getItem("profileType");

  const input = useRef();
  const [cartQty, setCartQty] = useState(1);
  const { productID } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios
      .post(
        "http://localhost/jewelry-store/jewelry-store-php/get_product_details.php",
        {
          productID: productID,
        }
      )
      .then((response) => {
        if (response.data.success) {
          setProduct(response.data.product); // Set product details
        } else {
          console.error("Error fetching product:", response.data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching product:", error);
      });
  }, [productID]);

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
        {profileType === "admin" && (
          <button
            type="button"
            onClick={() => {
              deleteProduct();
            }}
          >
            Delete
          </button>
        )}
        {responseMessage}
      </div>
    </div>
  );
};

export default ProductDetails;
