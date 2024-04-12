import axios from "axios";
import FetchAllOrders from "./get-all-orders";

const ChangeOrderStatus = () => {
  const { fetchAllOrders } = FetchAllOrders();

  const changeStatus = (orderID, currentStatus = null) => {
    if (currentStatus === null) {
      currentStatus = window.prompt(
        "Are you sure you want to cancel your trip?"
      );
      if (currentStatus === null) {
        // User clicked cancel or closed the prompt
        return Promise.reject("Action canceled by user");
      }
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
        console.error("Error cancelling trip:", error);
        // Handle error
      });
  };

  return { changeStatus };
};

export default ChangeOrderStatus;
