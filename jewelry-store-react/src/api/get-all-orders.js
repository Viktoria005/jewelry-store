import axios from "axios";
import { useState, useEffect } from "react";

const FetchAllOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost/jewelry-store/jewelry-store-php/get_all_orders.php")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {
        console.error("Error: ", error);
      });
  }, []);

  return { orders };
};

export default FetchAllOrders;
