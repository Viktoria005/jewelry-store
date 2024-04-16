import React, { useState, useEffect } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";

const AddProductLogic = () => {
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
      } else {
        console.error("Error adding product");
      }
    } catch (error) {
      console.error("Network error", error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setResponseMessage(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [responseMessage]);

  return { formData, responseMessage, handleChange, handleSubmit };
};

export default AddProductLogic;
