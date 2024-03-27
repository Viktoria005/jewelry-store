import React, { useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";

const LoginData = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loginData, setLoginData] = useState({
    username: "",
    pwd: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost/jewelry-store/jewelry-store-php/login.php",
        loginData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        sessionStorage.setItem("userID", response.data.userID);
        sessionStorage.setItem("firstName", response.data.firstName);
        sessionStorage.setItem("lastName", response.data.lastName);
        sessionStorage.setItem("username", response.data.username);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("dateOfBirth", response.data.dateOfBirth);
        sessionStorage.setItem("gender  ", response.data.gender);
        sessionStorage.setItem("profileType", response.data.profileType);

        setResponseMessage(
          <Alert severity="success">Logged in successfully</Alert>
        );
        window.location.href = "/home";
      } else {
        setResponseMessage(
          <Alert severity="error">Invalid username or password</Alert>
        );
        console.log(response.data.message);
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return {
    showPassword,
    loginData,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    responseMessage
  };
};

export default LoginData;
