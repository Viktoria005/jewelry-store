import { useState, useEffect } from "react";
import axios from "axios";

const ProductFilter = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({
    rings: false,
    earrings: false,
    necklaces: false,
    bracelets: false,
    gold: false,
    silver: false,
  });
  const [selectedPrice, setSelectedPrice] = useState("");

  useEffect(() => {
    const sendFiltersToServer = async () => {
      try {
        const params = {};
        const selectedType = Object.keys(selectedFilters).find(
          (key) => key !== "gold" && key !== "silver" && selectedFilters[key]
        );
        const selectedMaterial = Object.keys(selectedFilters).find(
          (key) => (key === "gold" || key === "silver") && selectedFilters[key]
        );

        if (selectedType) params.type = selectedType;
        if (selectedMaterial) params.material = selectedMaterial;
        if (selectedPrice) params.price = selectedPrice;

        const response = await axios.get(
          "http://localhost/jewelry-store/jewelry-store-php/product_filter.php",
          { params }
        );
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    sendFiltersToServer();
  }, [selectedFilters, selectedPrice]);

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSelectedFilters((prevFilters) => {
      if ((name === "gold" || name === "silver") && checked) {
        const newFilters = { ...prevFilters };
        Object.keys(prevFilters)
          .filter((key) => key === "gold" || key === "silver")
          .forEach((key) => {
            if (key !== name) {
              newFilters[key] = false;
            }
          });
        return { ...newFilters, [name]: checked };
      } else if (checked) {
        const newFilters = { ...prevFilters };
        Object.keys(prevFilters)
          .filter((key) => key !== "gold" && key !== "silver")
          .forEach((key) => {
            if (key !== name) {
              newFilters[key] = false;
            }
          });
        return { ...newFilters, [name]: checked };
      } else {
        return { ...prevFilters, [name]: checked };
      }
    });
  };

  const handleShowAll = () => {
    setSelectedFilters({
      rings: false,
      earrings: false,
      necklaces: false,
      bracelets: false,
      gold: false,
      silver: false,
    });
  };

  const handlePriceChange = (event) => {
    setSelectedPrice(event.target.value);
  };

  return {
    filteredProducts,
    handleCheckboxChange,
    handleShowAll,
    handlePriceChange,
    selectedFilters,
    selectedPrice,
  };
};

export default ProductFilter;
