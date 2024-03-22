import axios from "axios";

const RemoveCartItem = () => {
  const removeCartItem = (productID, cartID, fetchCartItems) => {
    axios
      .delete(
        `http://localhost/jewelry-store/jewelry-store-php/remove_cart_item.php?productID=${productID}&cartID=${cartID}`
      )
      .then(() => {
        fetchCartItems();
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return { removeCartItem };
};

export default RemoveCartItem;
