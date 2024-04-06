import axios from "axios";
import Alert from "@mui/material/Alert";
import React, { useState } from "react";

const AddToCart = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const userID = sessionStorage.getItem("userID");

  const addToCart = (productID, cartQty) => {
    return axios
      .post(
        `http://localhost/jewelry-store/jewelry-store-php/add_to_cart.php`,
        { userID, productID, cartQty }
      )
      .then(() => {
        setResponseMessage(
          <Alert severity="success">Item added to cart successfully</Alert>
        );

        setTimeout(() => {
          setResponseMessage(null); 
        }, 2000); 
      })

      .catch((error) => {
        console.error("Error inserting into cart:", error);
      });
  };

  return { addToCart, responseMessage };
};

export default AddToCart;