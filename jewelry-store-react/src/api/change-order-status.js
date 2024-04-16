import axios from "axios";
import FetchAllOrders from "./get-all-orders";

const ChangeOrderStatus = () => {
  const { fetchAllOrders } = FetchAllOrders();

  const changeStatus = (orderID, currentStatus = null) => {
    if (currentStatus === null) {
      currentStatus = window.prompt(
        "Enter the new status: Accepted, In Process,  Delivered):"
      );
      if (currentStatus === null) {
        console.log("Action canceled by user");
        return;
      }
    }
    if (currentStatus.toLowerCase() === "canceled") {
      console.log("Cannot change status. Order is already canceled.");
      return Promise.reject("Order is already canceled");
    }

    return axios
      .post(
        `http://localhost/jewelry-store/jewelry-store-php/change_order_status.php`,
        {
          orderID,
          currentStatus,
        }
      )
      .then(() => {
        window.location.reload();
        fetchAllOrders();
      })
      .catch((error) => {
        console.error("Error changing order status:", error);
        
      });
  };

  return { changeStatus };
};

export default ChangeOrderStatus;
