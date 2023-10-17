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
            <a href="#">About us</a>
          </li>
          <li className="Products" style={{ color: "white" }}>
            Products
            <ul className="sub-menu">
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
            <a href="#">Shopping cart</a>
          </li>
          <li className="account" style={{ color: "white" }}>
            Account
            <ul className="sub-menu">
              <li>
                <a href="#">Log in</a>
              </li>
              <li>
                <a href="#">Sign up</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
