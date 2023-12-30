import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-logo">
        <div className="footer-links">
          <ul>
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
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-contact">
          <p>Email: info@sparkly.com</p>
          <p>Phone: 123-456-7890</p>
        </div>
      </div>
      <div className="footer-social">
        <a
          href="https://www.facebook.com/Restaurant.Silhouette/"
          target="_blank"
        >
          <i className="bi bi-facebook"></i>
        </a>
        <a href="https://www.tiktok.com/@vickyyyy.kk" target="_blank">
          <i className="bi bi-tiktok"></i>
        </a>
        <a href="https://www.instagram.com/vickyyy.kk/" target="_blank">
          <i className="fab instagram"></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
