import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Make a GET request to your PHP endpoint using Axios
    axios.get('http://localhost/jewelry-store/jewelry-store-php/products.php')
      .then(response => {
        // Set the products state with the data received from the server
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []); // This empty dependency array ensures that this effect runs only once after the component mounts

  return (
    <main>
      <div id="type-product-container">
        <ul className="product-menu">
          {products.map(product => (
            <li key={product.id}>
              <div>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <img src={product.imageUrl} alt={product.name} />
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );

};

export default Products;
