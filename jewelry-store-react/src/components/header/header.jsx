import "./header.css";
import sparklyLogo from "../../images/sparkly-logo.png";

const Header = () => {
  return (
    <header id="sparkly-header">
      <div id="sparkly-logo-container">
        <img id="sparkly-logo" src={sparklyLogo} alt="sparkly" />
      </div>
      <div className="nav-content">
        <ul className="nav-menu">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="#">Shopping Cart</a>
          </li>
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
        </ul>
      </div>
    </header>
  );
};

export default Header;
