import axios from "axios";
import { useState, useEffect } from "react";

const FetchProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/jewelry-store/jewelry-store-php/products.php")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return { products };
};

export default FetchProducts;
