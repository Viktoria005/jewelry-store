import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Alert from "@mui/material/Alert";

const EditProductData = () => {
  const [productData, setProductData] = useState(null);
  const [responseMessage, setResponseMessage] = useState(null);
  const { productID } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost/jewelry-store/jewelry-store-php/edit_product_data.php",
          { productID: productID }
        );
        if (response.data.success) {
          setProductData(response.data.data);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error("An error occurred while fetching product information.");
      }
    };

    fetchData();
  }, [productID]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({ ...productData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/jewelry-store/jewelry-store-php/edit_product.php",
        productData
      );
      if (response.data.success) {
        setResponseMessage(
          <Alert severity="success">Product data updated successfully</Alert>
        );
      } else {
        setResponseMessage(
          <Alert severity="error">Error updating product data</Alert>
        );
        console.error(response.data.message);
      }
    } catch (error) {
      console.error("An error occurred while updating product information.");
    }
  };

  const cancelModify = () => {
    window.location.href = `/products/${productID}`;
  };

  return {
    productData,
    handleChange,
    handleSubmit,
    cancelModify,
    responseMessage,
  };
};

export default EditProductData;
