import "./footer.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d733.3796625187256!2d23.318579169567784!3d42.67155478424693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa84ff863d4cbb%3A0x4292244c25fda506!2sBlvd%20%22James%20Bourchier%22%2065%2C%201407%20Sofia!5e0!3m2!1sen!2sbg!4v1708115913388!5m2!1sen!2sbg"
            width="300"
            height="200"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps"
          ></iframe>
        </div>
        <div className="social-container">
          <div className="footer-contact">
            <p>Blvd "James Bourchier" 65</p>
            <p>Sofia, Bulgaria</p>
            <p>Email: info@sparkly.com</p>
            <p>Phone: 123-456-7890</p>
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
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
