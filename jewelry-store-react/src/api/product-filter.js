import { useState, useEffect } from "react";
import axios from "axios";

const ProductFilter = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    rings: false,
    earrings: false,
    necklaces: false,
    bracelets: false,
    // crowns: false,
  });

  useEffect(() => {
    const sendFiltersToServer = async () => {
      try {
        const selectedTypes = Object.keys(selectedFilters).filter(
          (key) => selectedFilters[key]
        );
        
        if (selectedTypes.length > 0) {
          const response = await axios.get(
            "http://localhost/jewelry-store/jewelry-store-php/product_filter.php",
            {
              params: { type: selectedTypes.join(",") },
            }
          );
          setFilteredProducts(response.data);
        } else {
          const response = await axios.get(
            "http://localhost/jewelry-store/jewelry-store-php/product_filter.php"
          );
          setFilteredProducts(response.data);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    sendFiltersToServer();
  }, [selectedFilters]);

  const handleCheckboxChange = (event) => {
    const updatedFilters = { ...selectedFilters };
    
    // Uncheck all other checkboxes when one is checked
    Object.keys(updatedFilters).forEach((key) => {
      updatedFilters[key] = false;
    });
    
    updatedFilters[event.target.name] = event.target.checked;
    setSelectedFilters(updatedFilters);
  };

  const handleShowAll = () => {
    setSelectedFilters({
      rings: false,
      earrings: false,
      necklaces: false,
      bracelets: false,
      // crowns: false,
    });
  };

  return { filteredProducts, handleCheckboxChange, handleShowAll, selectedFilters };
};

export default ProductFilter;
