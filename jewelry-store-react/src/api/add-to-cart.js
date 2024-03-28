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
          setResponseMessage(null); // Hide the alert message after 2 seconds
        }, 2000); // Timer set to 2 seconds (2000 milliseconds)
      })

      .catch((error) => {
        console.error("Error inserting into cart:", error);
      });
  };

  return { addToCart, responseMessage };
};

export default AddToCart;
