import React from "react";
import "./add-product.css";
import IsAdmin from "../../api/is-admin";
import AddProductLogic from "../../api/add-product";

const AddProduct = () => {
  const { formData, responseMessage, handleChange, handleSubmit } =
    AddProductLogic();

  const { authenticatedAdmin } = IsAdmin();

  return (
    <div>
      {authenticatedAdmin ? (
        <React.Fragment>
          {responseMessage}
          <div className="addProductBackground"></div>
      <div className="addProductBody">
          <form onSubmit={handleSubmit} className="add-product-form">
            <h2 className="title"> Add Product</h2>
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
                  <label
                    className="add-product-label"
                    htmlFor="product-name"
                  >
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
                  <label
                    className="add-product-label"
                    htmlFor="stock-quantity"
                  >
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
        </React.Fragment>
      ) : (
        <p>You dont have access</p>
      )}
    </div>
  );
};

export default AddProduct;
