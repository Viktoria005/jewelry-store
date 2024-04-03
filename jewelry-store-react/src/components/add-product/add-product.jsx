import React, { useState } from "react";
import axios from "axios";
import './add-product.css';

const AddProduct = () => {
  const [formData, setFormData] = useState({
    categoryID: "",
    productName: "",
    description: "",
    price: "",
    imageUrl: "",
    stockQuantity: "",
    material: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/jewelry-store/jewelry-store-php/add_product.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200) {
        // Handle successful product addition
        console.log("Product added successfully");
      } else {
        // Handle product addition error
        console.error("Error adding product");
      }
    } catch (error) {
      // Handle network error or any other Axios error
      console.error("Network error", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-product-form">


      <div className="left">

      <div className="add-product">
        <label htmlFor="category-id">Category ID</label>
        <input
          type="text"
          name="categoryID"
          value={formData.categoryID}
          onChange={handleChange}
          id="category-id"
          required
        />
      </div>

      <div className="add-product">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          name="productName"
          value={formData.productName}
          onChange={handleChange}
          id="product-name"
          required
        />
      </div>

      <div className="add-product">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          id="description"
          required
        />
      </div>

      <div className="add-product">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          id="price"
          required
        />
      </div>
      </div>
      <div className="right">
      <div className="add-product">
        <label htmlFor="image-url">Image URL</label>
        <input
          type="text"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          id="image-url"
          required
        />
      </div>
      <div className="add-product">
        <label htmlFor="stock-quantity">Stock Quantity</label>
        <input
          type="number"
          name="stockQuantity"
          value={formData.stockQuantity}
          onChange={handleChange}
          id="stock-quantity"
          required
        />
      </div>
      <div className="add-product">
        <label htmlFor="material">Material</label>
        <input
          type="text"
          name="material"
          value={formData.material}
          onChange={handleChange}
          id="material"
          required
        />
      </div>
      <button className="add-product-button" type="submit">
        Add Product
      </button>
      </div>
    </form>
  );
};

export default AddProduct;
