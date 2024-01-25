import "./main.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselItem = ({ itemName, imageUrl }) => (
  <div>
    <img src={imageUrl} alt={itemName} />
    <p>{itemName}</p>
  </div>
);

const Main = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <main>
      <div id="type-product-container">
        <ul className="product-menu">
          <li>
            <a href="#">Rings</a>
          </li>
          <li>
            <a href="#">Engagement rings</a>
          </li>
          <li>
            <a href="#">Necklaces</a>
          </li>
          <li>
            <a href="#">Bracelets</a>
          </li>
          <li>
            <a href="#">Watches</a>
          </li>
          <li>
            <a href="#">Earrings</a>
          </li>
        </ul>
      </div>

      <div className="slideshow-container">
        <h3>Popular</h3>

        <Carousel responsive={responsive} className="custom-carousel">
          <div>Item 1</div>
          <div>Item 2</div>
          <div>Item 3</div>
          <div>Item 4</div>
        </Carousel>
        </div>
    </main>
  );
};

export default Main;
