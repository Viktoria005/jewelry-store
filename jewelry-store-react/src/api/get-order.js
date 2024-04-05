import axios from "axios";
import { useState, useEffect } from "react";

const FetchOrder = () => {
  const [orders, setOrders] = useState([]);
  const userID = sessionStorage.getItem('userID');

  useEffect(() => {
    axios
      .post("http://localhost/jewelry-store/jewelry-store-php/get_order.php", {
        userID: userID
      })
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return { orders };
};

export default FetchOrder;
