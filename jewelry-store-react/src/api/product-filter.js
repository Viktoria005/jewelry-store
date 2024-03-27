import { useState, useEffect } from "react";
import axios from "axios";

const ProductFilter = () => {
  const [filteredProducts, setFilteredProducts] = useState([]); // State to store filtered products
  const [selectedFilters, setSelectedFilters] = useState({
    rings: false,
    earrings: false,
    necklaces: false,
    bracelets: false,
    crowns: false,
  });

  useEffect(() => {
    const sendFiltersToServer = async () => {
      try {
        const selectedTypes = Object.keys(selectedFilters).filter(
          (key) => selectedFilters[key]
        );
        // Check if any filters are selected
        if (selectedTypes.length > 0) {
          const response = await axios.get(
            "http://localhost/jewelry-store/jewelry-store-php/product_filter.php",
            {
              params: { type: selectedTypes.join(",") },
            }
          );
          setFilteredProducts(response.data); // Set filtered products in state
        } else {
          // If no filters are selected, fetch all products
          const response = await axios.get(
            "http://localhost/jewelry-store/jewelry-store-php/product_filter.php"
          );
          setFilteredProducts(response.data); // Set all products in state
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    sendFiltersToServer();
  }, [selectedFilters]);

  const handleCheckboxChange = (event) => {
    setSelectedFilters({
      ...selectedFilters,
      [event.target.name]: event.target.checked,
    });
  };

  return { filteredProducts, handleCheckboxChange, selectedFilters };
};

export default ProductFilter;
