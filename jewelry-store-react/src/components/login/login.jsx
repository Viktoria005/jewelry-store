import "./login.css";
import LoginData from "../../api/login";
import hidePasswordIcon from "../../images/hide-password-icon.png";
import showPasswordIcon from "../../images/show-password-icon.png";
import React from "react";

const LoginForm = () => {
  const {
    showPassword,
    loginData,
    togglePasswordVisibility,
    handleChange,
    handleSubmit,
    responseMessage
  } = LoginData();

  return (
    <main>
      <div className="login-form">
        <div className="login-text">Login</div>
        <form onSubmit={handleSubmit} id="login-form" method="post">
          <div className="form-group">
            <label className="log-in-label" htmlFor="username">Username</label>
            <input className="log-in-input"
              type="text"
              name="username"
              onChange={handleChange}
              value={loginData.username}
              required
            />
          </div>
          <div className="form-group">
            <label className="log-in-label" htmlFor="password">Password</label>
            <div className="password-group">
              <input className="log-in-input"
                id="password"
                type={showPassword ? "text" : "password"}
                name="pwd"
                onChange={handleChange}
                value={loginData.pwd}
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
          <button id="login-btn" type="submit">
            Login
          </button>
        </form>
        <a className="sign-up-link" href="/signup">
          Don&apos;t have an account yet? Sign up
        </a>
      {responseMessage}
      </div>
    </main>
  );
};

export default LoginForm;
