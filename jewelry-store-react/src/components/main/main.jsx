import React, { useState, useEffect } from "react";
import axios from "axios";
import "./main.css";
import { Link } from "react-router-dom";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axios
      .get("http://localhost/jewelry-store/jewelry-store-php/products_slideshow.php")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  useEffect(() => {
    // Update startIndex when products change
    if (products.length > 0) {
      setStartIndex(0);
    }
  }, [products]);

  const nextProduct = () => {
    if (startIndex + 3 < products.length) {
      setStartIndex((prevIndex) => prevIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevProduct = () => {
    if (startIndex === 0) {
      setStartIndex(products.length - 3);
    } else {
      setStartIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <main>
      <div className="slideshow-container">
        <br />
        <br />
        <br />
        <h1 id="latest-products-text" style={{ fontStyle: "italic" }}>Latest Products</h1>

        <br />
        <div className="slide">
          {products.slice(startIndex, startIndex + 3).map((product) => (
            <div key={product.productID}>
              <Link to={`/products/${product.productID}`}>
                <img src={product.imageUrl} alt={product.productName} />
                <h3 style={{ color: "#b6d0e2" }}>{product.productName}</h3>
              </Link>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>

        <button className="prev" onClick={prevProduct}>
          &#10094;
        </button>
        <button className="next" onClick={nextProduct}>
          &#10095;
        </button>
      </div>

      <div className="about-us-container">
        <div className="about-us-image">
          <img
            src="https://i.pinimg.com/736x/9f/88/29/9f8829956b35ebdc4d5b22134b138939.jpg"
            alt="Company Image"
          />
        </div>

        <div className="about-us-text">
          <h2 style={{fontStyle: "italic"}}> About Us</h2>
          <p style={{ textAlign: 'justify' , fontStyle: "italic"}}>
            Welcome to Sparkly, where fine craftsmanship meets timeless elegance. Created with a passion for luxury and a commitment to impeccable quality, we offer a curated selection of fine jewelry to adorn the most precious moments of your life. From dazzling diamonds to radiant gemstones, each piece in our collection is meticulously crafted to capture the essence of sophistication and beauty.
          </p>
          <p style={{ textAlign: 'justify' , fontStyle: "italic" }}>
            At Sparkly, we understand that jewelry is more than just an accessory, it is an expression of style and feeling. Whether you are celebrating a milestone or just indulging in a touch of luxury, our expertly curated designs suit every taste and occasion. With a commitment to authenticity and integrity, we invite you to browse our unparalleled selection and experience the epitome of Sparkly elegance.
          </p>
        </div>
      </div>
    </main>
  );
};

export default Main;
