import axios from "axios";
import { useState } from "react";

const SignupData = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const [responseMessage, setResponseMessage] = useState(null);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    pwd: "",
    dateOfBirth: "",
    gender: "",
    profileType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      const email = value.toLowerCase();

      if (email === "vikikirilova182@gmail.com") {
        setFormData({
          ...formData,
          [name]: value,
          profileType: "admin",
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
          profileType: "user",
        });
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.pwd) {
      setPasswordsMatch(false);
      return;
    }

    setPasswordsMatch(true);

    try {
      const response = await axios.post(
        "http://localhost/jewelry-store/jewelry-store-php/register.php",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // Handle the response here
      if (response.status === 200) {
        const data = response.data;
        if (data.success) {
          // Handle successful registration
          window.location.href = "/login";
        } else {
          // Handle registration error
          setResponseMessage(
            <div className="response-message">Error creating user</div>
          );
        }
      } else {
        // Handle non-200 status code
        setResponseMessage(
          <div className="response-message">Server error</div>
        );
      }
    } catch (error) {
      // Handle network error or any other Axios error
      setResponseMessage(<div className="response-message">Network error</div>);
    }
  };

  return {
    showPassword,
    passwordsMatch,
    responseMessage,
    formData,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
  };
};

export default SignupData;
