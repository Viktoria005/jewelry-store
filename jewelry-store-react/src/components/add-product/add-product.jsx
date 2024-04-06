import React, { useState } from "react";
import axios from "axios";
import "./add-product.css";
import Alert from "@mui/material/Alert";

const AddProduct = () => {
  const [formData, setFormData] = useState({
    categoryID: "",
    productName: "",
    description: "",
    price: "",
    imageUrl: "",
    stockQuantity: "",
    material: "",
  });

  const [responseMessage, setResponseMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (
      (name === "stockQuantity" || name === "price") &&
      parseFloat(value) < 0
    ) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
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
        setResponseMessage(
          <Alert severity="success">Product added successfully</Alert>
        );
        setFormData({
          categoryID: "",
          productName: "",
          description: "",
          price: "",
          imageUrl: "",
          stockQuantity: "",
          material: "",
        });

        setTimeout(() => {
          setResponseMessage(null);
        }, 2000);
      } else {
        console.error("Error adding product");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };

  return (
    <div>
      {responseMessage}
      <form onSubmit={handleSubmit} className="add-product-form">
        <h2 className="title"> Add product</h2>
        <div className="form-container">
          <div className="left">
            <div className="add-product">
              <label className="add-product-label" htmlFor="category-id">
                Category ID
              </label>
              <select
                className="add-product-select"
                name="categoryID"
                value={formData.categoryID}
                onChange={handleChange}
                id="categoryID"
                required
              >
                <option value=""></option>
                <option value="1">Rings</option>
                <option value="2">Earrings</option>
                <option value="3">Necklaces</option>
                <option value="4">Bracelets</option>
              </select>
            </div>

            <div className="add-product">
              <label className="add-product-label" htmlFor="product-name">
                Product Name
              </label>
              <input
                className="add-product-input"
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                id="product-name"
                required
              />
            </div>

            <div className="add-product">
              <label className="add-product-label" htmlFor="description">
                Description
              </label>
              <textarea
                className="add-product-input"
                name="description"
                value={formData.description}
                onChange={handleChange}
                id="description"
                required
              />
            </div>

            <div className="add-product">
              <label className="add-product-label" htmlFor="price">
                Price
              </label>
              <input
                className="add-product-input"
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
              <label className="add-product-label" htmlFor="image-url">
                Image URL
              </label>
              <input
                className="add-product-input"
                type="text"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                id="image-url"
                required
              />
            </div>
            <div className="add-product">
              <label className="add-product-label" htmlFor="stock-quantity">
                Stock Quantity
              </label>
              <input
                className="add-product-input"
                type="number"
                name="stockQuantity"
                value={formData.stockQuantity}
                onChange={handleChange}
                id="stock-quantity"
                required
              />
            </div>

            <div className="add-product">
              <label className="add-product-label" htmlFor="material">
                Material
              </label>
              <select
                className="add-product-select"
                name="material"
                value={formData.material}
                onChange={handleChange}
                id="material"
                required
              >
                <option value=""></option>
                <option value="Gold">Gold</option>
                <option value="Silver">Silver</option>
              </select>
            </div>
            <button className="add-product-button" type="submit">
              Add Product
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
