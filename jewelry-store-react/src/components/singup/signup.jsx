import "./signup.css";
import React from "react";
import hidePasswordIcon from "../../images/hide-password-icon.png";
import showPasswordIcon from "../../images/show-password-icon.png";
import SignupData from "../../api/signup-data";

const Signup = () => {
  const {
    showPassword,
    passwordsMatch,
    responseMessage,
    formData,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
  } = SignupData();

  return (
    <div className="signup-form">
      <div className="signup-text">Create An Account</div>
      <form onSubmit={handleSubmit} id="signup-form" method="post">
        <div className="content-row">
          <div className="column">
            <div className="form-group">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                id="first-name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                id="last-name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                id="username"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                id="email"
                required
              />
            </div>
          </div>
          <div className="column">
            <label htmlFor="password">Password</label>
            <div className="password-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="password-field"
                required
              />
              <i
                className={`password-toggle ${
                  showPassword ? "visible" : "hidden"
                }`}
                onClick={() => togglePasswordVisibility()}
              >
                <img
                  src={showPassword ? hidePasswordIcon : showPasswordIcon}
                  alt="Toggle Password"
                />
              </i>
            </div>
            <div className="form-group">
              <label htmlFor="confirm-password">Confirm Password</label>
              <div className="password-group">
                <input
                  type={showPassword ? "text" : "password"}
                  name="pwd"
                  value={formData.pwd}
                  onChange={handleChange}
                  className="password-field"
                  required
                />
                <i
                  className={`password-toggle ${
                    showPassword ? "visible" : "hidden"
                  }`}
                  onClick={togglePasswordVisibility}
                >
                  <img
                    src={showPassword ? hidePasswordIcon : showPasswordIcon}
                    alt="Toggle Password"
                  />
                </i>
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                id="dob"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                id="gender"
                required
              >
                <option value=""></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="pigeon">Pigeon</option>
                <option value="croissant">Croissant</option>
              </select>
            </div>
          </div>
        </div>
        <button id="submit-button" type="submit">
          Sign Up
        </button>
        <a className="log-in-link" href="/login">
          Already have an account? Log in
        </a>
        {!passwordsMatch && (
          <div className="error-message">Passwords don&apos;t match</div>
        )}
        {responseMessage}
      </form>
    </div>
  );
};

export default Signup;
