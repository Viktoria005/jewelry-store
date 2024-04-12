import axios from "axios";
import { useParams } from "react-router-dom";

const DeleteProduct = () => {
  const { productID } = useParams();

  const deleteProduct = () => {
    axios
      .delete(
        `http://localhost/jewelry-store/jewelry-store-php/delete_product.php?productID=${productID}`
      )
      .then(() => {
        window.location.href = "/products";
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return { deleteProduct };
};

export default DeleteProduct;
