import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost/jewelry-store/jewelry-store-php/products.php')
      .then(response => {
        setProducts(response.data);
        setLoading(false);
      })
      .catch(error => {
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
        </div>
      <div id="type-product-container" className="products-container">
        <ul className="product-menu">
          {products.map(product => (
            <li key={product.id} className="product-item">
              <div className="product-content">
                <img src={product.imageUrl} alt={product.productName} />
                <h3>{product.productName}</h3>
                <p>Price: ${product.price}</p>
                  {/* <p>{product.description}</p>  */}
             
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
    
  );
};

export default Products;
