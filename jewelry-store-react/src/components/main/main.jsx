import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./main.css";
import { Link } from 'react-router-dom';

const Main = () => {
  const [products, setProducts] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    axios.get('http://localhost/jewelry-store/jewelry-store-php/products.php')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const nextProduct = () => {
    if (startIndex + 1 < products.length) {
      setStartIndex(prevIndex => prevIndex + 1);
    } else {
      setStartIndex(0);
    }
  };

  const prevProduct = () => {
    if (startIndex === 0) {
      setStartIndex(products.length - 1);
    } else {
      setStartIndex(prevIndex => prevIndex - 1);
    }
  };

  return (
    <main>
       <div className="slideshow-container">
        <br />
        <br />
        <br />
        <h2> Popular products</h2>
        <br />
        <div className="slide">
          {products.slice(startIndex, startIndex + 3).map(product => (
            <div key={product.productId}>
              <img src={product.imageUrl} alt={product.productName} />
              <Link to={`/products/${product.productId}`}>
                <h3>{product.productName}</h3>
              </Link>
              <p>Price: ${product.price}</p>
            </div>
          ))}
        </div>
        <button className="prev" onClick={prevProduct}>&#10094;</button>
        <button className="next" onClick={nextProduct}>&#10095;</button>
      </div>


      <div className="about-us-container">
        
      <div className="about-us-image">
          <img src="https://i.pinimg.com/736x/9f/88/29/9f8829956b35ebdc4d5b22134b138939.jpg" alt="Company Image" />
        </div>

        <div className="about-us-text">
          <h2>About Us</h2>
          <p>Добре дошли в Sparkly, където изящното майсторство се среща с вечната елегантност. Създадени със страст към лукса и отдаденост на безупречното качество, ние предлагаме подбрана селекция от фини бижута, които да украсят най-ценните моменти от живота ви. От ослепителни диаманти до сияещи скъпоценни камъни, всяко парче в нашата колекция е щателно изработено, за да улови същността на изтънчеността и красотата.</p>
        <p>Ние в Sparkly разбираме, че бижутата са повече от просто аксесоар; това е израз на стил и чувство. Независимо дали празнувате крайъгълен камък или просто се отдавате на нотка лукс, нашите експертно подбрани дизайни отговарят на всеки вкус и повод. С ангажимент за автентичност и почтеност ви каним да разгледате нашата несравнима селекция и да изпитате олицетворението на елегантността в Sparkly.</p>
        </div>
       
      </div>

    </main>
  );
};

export default Main;
