import "./header.css";
import sparklyLogo from "../../images/sparkly-logo.png";

const Header = () => {
  return (
    <header id="sparkly-header">
      <div id="sparkly-logo-container">
        <button id="sparkly-logo-btn" type="button">
          <img id="sparkly-logo" src={sparklyLogo} alt="sparkly" />
        </button>
      </div>
      <div class="nav-content">
        <ul class="nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <a href="#">About Us</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Shopping cart</a>
          </li>
          <li>
            Account
            <ul>
              <li>Log in</li>
              <li>Sign up</li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
