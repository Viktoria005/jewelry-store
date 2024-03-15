import React from "react";
import './add-product.css';

const AddProduct = () => {
  return (
    <>
      <div className="form-group">
        <label htmlFor="product-image-input">Product Image</label>
        <input name="product-image-input" type="file" id="product-image-input"/>
      </div>
    </>
  );
};

export default AddProduct;
