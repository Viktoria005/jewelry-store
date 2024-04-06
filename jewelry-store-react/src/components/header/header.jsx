import "./header.css";
import sparklyLogo from "../../images/sparkly-logo.png";
import IsAuthenticated from "../../api/is-athenticated";
import useLogout from "../../api/logout";
import React from "react";
import IsAdmin from "../../api/is-admin";

const Header = () => {
  const { authenticated } = IsAuthenticated();
  const { authenticatedAdmin } = IsAdmin();
  const logout = useLogout();

  return (
    <header id="sparkly-header">
      <div id="sparkly-logo-container">
        <a href="/home" id="sparkly-logo-btn">
          <img id="sparkly-logo" src={sparklyLogo} alt="sparkly" />
        </a>
      </div>
      <div className="nav-content">
        <ul className="nav-menu">
          <li>
            <a href="/home">Home</a>
          </li>
          {authenticatedAdmin && (
            <li className="dropdown">
              <a className="admin-button">
                Admin
              </a>
              <div className="dropdown-content">
                <a href="/add-product">Add Product</a>
                <a href="/update-product">Update Product</a>
                <a href="/remove-product">Remove Product</a>
                <a href="/all-orders">All Orders</a>
              </div>
            </li>
          )}
          <li>
            <a href="/products">Products</a>
          </li>
          {authenticated ? (
            <>
              <li>
                <a href="/cart">Shopping Cart</a>
              </li>
              <li>
                <a href="/order"> Orders </a>
              </li>
              <li>
                <a href="/" className="logout-button" onClick={logout}>
                  Logout
                </a>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login" className="login-button">
                  Log in
                </a>
              </li>
              <li>
                <a href="/signup" className="signup-button">
                  Sign up
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
