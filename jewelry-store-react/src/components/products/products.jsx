import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost/jewelry-store/jewelry-store-php/products.php")
      .then((response) => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching products: {error.message}</div>;
  }

  return (
    <main className="container">
      <div id="productfilter">
        <h3>Product Filter</h3>
        <h4> Type product </h4>

        <label>
          <input type="checkbox" name="type" value="type1" />
          Type 1
        </label>
        <label>
          <input type="checkbox" name="type" value="type2" />
          Type 2
        </label>
        <label>
          <input type="checkbox" name="type" value="type3" />
          Type 3
        </label>
        <h4> Material</h4>
        <h4> Price </h4>
      </div>
      <div id="type-product-container" className="products-container">
        <ul className="product-menu">
          {products.map((product) => (
            <li key={product.id} className="product-item">
              <div className="product-content">
                <Link to={`/products/${product.productID}`}>
                  <img src={product.imageUrl} alt={product.productName} />
                  <h3 style={{ color: "#b6d0e2" }}>{product.productName}</h3>
                </Link>
                <p>Price: ${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
};

export default Products;
