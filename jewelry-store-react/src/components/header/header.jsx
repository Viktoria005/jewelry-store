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
      <div className="nav-content">
        <ul className="nav-menu">
          <li>
            <a href="#">Home</a>
          </li>
          <li className="Products" style={{ color: "white" }}>
            Products
            <ul className="sub-menu-products">
              <li>
                <a href="#">Rings</a>
              </li>
              <li>
                <a href="#">Earrings</a>
              </li>
              <li>
                <a href="#">Engagement rings</a>
              </li>
              <li>
                <a href="#">Bracelet</a>
              </li>
              <li>
                <a href="#">Necklace</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Shopping Cart</a>
          </li>
          <li>
            <ul className="account-menu">
              <li className="account" style={{ color: "white" }}>
                Account
                <ul className="sub-menu-account">
                  <li>
                    <a href="/login" className="login-button">
                      Log in
                    </a>
                  </li>
                  <li>
                    <a href="/signup" className="signup-button">
                      Sing up
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
