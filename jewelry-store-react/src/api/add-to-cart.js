import axios from "axios";

const AddToCart = () => {
    const userID = sessionStorage.getItem('userID');

    const addToCart = (productID, cartQty) => {
      return axios.post(`http://localhost/jewelry-store/jewelry-store-php/add_to_cart.php`, { userID, productID, cartQty })
        .catch(error => {
          console.error('Error inserting into cart:', error);
        });
    };
  
    return { addToCart };
};

export default AddToCart;