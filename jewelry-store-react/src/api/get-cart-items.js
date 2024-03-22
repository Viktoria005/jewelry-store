import { useState, useEffect } from "react";
import axios from "axios";

const FetchCartItems = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const userID = sessionStorage.getItem('userID');

  useEffect(() => {
    fetchCartItems();
  }, [userID]);

  const fetchCartItems = () => {
    axios.post('http://localhost/jewelry-store/jewelry-store-php/get_cart_items.php', {
      userID: userID
    })
      .then(response => {
        setCartProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching trips:', error);
      });
  }

  return { cartProducts, fetchCartItems };
};

export default FetchCartItems;