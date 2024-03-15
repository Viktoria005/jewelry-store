import { useState, useEffect } from "react";
import axios from "axios";

const FetchCartItems = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const userID = sessionStorage.getItem('userID');

  useEffect(() => {
    axios.post('http://localhost/jewelry-store/jewelry-store-php/get_cart_items.php', {
      userID: userID
    })
      .then(response => {
        setCartProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching trips:', error);
      });
  }, [userID]);

  return { cartProducts };
};

export default FetchCartItems;