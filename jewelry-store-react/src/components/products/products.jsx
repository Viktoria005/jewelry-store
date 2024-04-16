import "./products.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ProductFilter from "../../api/product-filter";

const Products = () => {
  const ITEMS_PER_PAGE = 10;
  const {
    filteredProducts,
    handleCheckboxChange,
    handleShowAll,
    handlePriceChange,
    selectedFilters,
    selectedPrice,
  } = ProductFilter();

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1); 
  };

  const filteredProductsBySearch = searchQuery
    ? filteredProducts.filter((product) =>
        product.productName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : filteredProducts;

  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentItems = filteredProductsBySearch.slice(indexOfFirstItem, indexOfLastItem);


  return (
    <main className="container">
      <div id="productfilter">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <h3>Product Filter</h3>
        <FormControlLabel
          control={
            <Radio
              checked={!Object.values(selectedFilters).some(Boolean)}
              onChange={handleShowAll}
              size="small"
            />
          }
          label="Show All products"
        />
        <h4> Type product </h4>
        <FormGroup>
          <FormControlLabel
            control={
              <Radio
                checked={selectedFilters.rings}
                onChange={handleCheckboxChange}
                name="rings"
                size="small"
              />
            }
            label="Rings"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedFilters.earrings}
                onChange={handleCheckboxChange}
                name="earrings"
                size="small"
              />
            }
            label="Earrings"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedFilters.necklaces}
                onChange={handleCheckboxChange}
                name="necklaces"
                size="small"
              />
            }
            label="Necklaces"
          />
          <FormControlLabel
            control={
              <Radio
                checked={selectedFilters.bracelets}
                onChange={handleCheckboxChange}
                name="bracelets"
                size="small"
              />
            }
            label="Bracelets"
          />
        </FormGroup>

        <h4> Material</h4>

        <FormControlLabel
          control={
            <Radio
              checked={selectedFilters.gold}
              onChange={handleCheckboxChange}
              name="gold"
              size="small"
            />
          }
          label="Gold"
        />
        <FormControlLabel
          control={
            <Radio
              checked={selectedFilters.silver}
              onChange={handleCheckboxChange}
              name="silver"
              size="small"
            />
          }
          label="Silver"
        />
        <h4> Price </h4>

        <FormControlLabel
          control={<Radio checked={selectedPrice === "DescendingOrder"} onChange={handlePriceChange} value="DescendingOrder" />}
          label="Descending order"
        />
        <FormControlLabel
          control={<Radio checked={selectedPrice === "Ascending"} onChange={handlePriceChange} value="Ascending" />}
          label="Ascending order"
        />
      </div>

      <div id="type-product-container" className="products-container">
        <ul className="product-menu">
          {currentItems.length > 0 ? (
            currentItems.map((product) => (
              <li key={product.productID} className="product-item">
                <div className="product-content">
                  <Link to={`/products/${product.productID}`}>
                    <img src={product.imageUrl} alt={product.productName} />
                    <h3 style={{ color: "#b6d0e2" }}>{product.productName}</h3>
                  </Link>
                  <p>Price: ${product.price}</p>
                </div>
              </li>
            ))
          ) : (
            <p>No products available. </p>
          )}
        </ul>
        {filteredProductsBySearch.length > ITEMS_PER_PAGE && (
          <ul className="pagination">
            {Array.from(
              { length: Math.ceil(filteredProductsBySearch.length / ITEMS_PER_PAGE) },
              (_, index) => (
                <li key={index} className={`page-item ${currentPage === index + 1 ? 'active' : ''}`}>
                  <button onClick={() => paginate(index + 1)} className="page-link">{index + 1}</button>
                </li>
              )
            )}
          </ul>
        )}
      </div>
    </main>
  );
};

export default Products;