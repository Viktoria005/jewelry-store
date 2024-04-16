import React from "react";
import EditProductData from "../../api/edit-product";
import IsAdmin from "../../api/is-admin";
import "./EditProduct.css";

const EditProduct = () => {
  const {
    productData,
    handleChange,
    handleSubmit,
    cancelModify,
    responseMessage,
  } = EditProductData();

  const { authenticatedAdmin } = IsAdmin();

  return (
    <div>
      {authenticatedAdmin ? (
        productData ? (
          <form onSubmit={handleSubmit} className="edit-product-form">
            <h2 className="title">Edit Product</h2>
            <div className="form-container">
              <div className="left">
                <div className="edit-product">
                  <label className="edit-product-label" htmlFor="categoryID">
                    Category ID
                  </label>
                  <select
                    className="edit-product-select"
                    name="categoryID"
                    value={productData.categoryID}
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
                <div className="edit-product">
                  <label
                    className="edit-product-label"
                    htmlFor="product-name"
                  >
                    Product Name
                  </label>
                  <input
                    className="edit-product-input"
                    type="text"
                    name="productName"
                    value={productData.productName}
                    onChange={handleChange}
                    id="product-name"
                    required
                  />
                </div>
                <div className="edit-product">
                  <label
                    className="add-product-label"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    className="edit-product-input"
                    name="description"
                    value={productData.description}
                    onChange={handleChange}
                    id="description"
                    required
                  />
                </div>
                <div className="edit-product">
                  <label className="edit-product-label" htmlFor="price">
                    Price
                  </label>
                  <input
                    className="edit-product-input"
                    type="number"
                    name="price"
                    value={productData.price}
                    onChange={handleChange}
                    id="price"
                    required
                  />
                </div>
              </div>
              <div className="right">
                <div className="edit-product">
                  <label className="edit-product-label" htmlFor="image-url">
                    Image URL
                  </label>
                  <input
                    className="edit-product-input"
                    type="text"
                    name="imageUrl"
                    value={productData.imageUrl}
                    onChange={handleChange}
                    id="image-url"
                    required
                  />
                </div>
                <div className="add-product">
                  <label
                    className="edit-product-label"
                    htmlFor="stock-quantity"
                  >
                    Stock Quantity
                  </label>
                  <input
                    className="edit-product-input"
                    type="number"
                    name="stockQuantity"
                    value={productData.stockQuantity}
                    onChange={handleChange}
                    id="stock-quantity"
                    required
                  />
                </div>
                <div className="edit-product">
                  <label className="edit-product-label" htmlFor="material">
                    Material
                  </label>
                  <select
                    className="edit-product-select"
                    name="material"
                    value={productData.material}
                    onChange={handleChange}
                    id="material"
                    required
                  >
                    <option value=""></option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                  </select>
                </div>
                <button className="edit-product-button" type="submit">
                  Update
                </button>
                <button
                  className="cancel-product-button"
                  type="button"
                  onClick={() => {
                    cancelModify();
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </form>
        ) : (
          <p>No product data</p>
        )
      ) : (
        <p>You don not have access</p>
      )}
      {responseMessage}
    </div>
  );
};

export default EditProduct;
