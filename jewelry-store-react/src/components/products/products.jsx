import "./products.css";
import React from "react";
import { Link } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import ProductFilter from "../../api/product-filter";

const Products = () => {
  const {
    filteredProducts,
    handleCheckboxChange,
    handleShowAll,
    selectedFilters,
  } = ProductFilter();

  return (
    <main className="container">
      <div id="productfilter">
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

          {/* <FormControlLabel
            control={
              <Radio
                checked={selectedFilters.cronws}
                onChange={handleCheckboxChange}
                name="crowns"
                size="small"
              />
            }
            label="Crowns"
          /> */}
          
        </FormGroup>

        <h4> Material</h4>

        <FormControlLabel
          value="end"
          control={<Radio name="gold" size="small" />}
          label="Gold"
        />
        <FormControlLabel
          value="end"
          control={<Radio name="silver" size="small" />}
          label="Silver"
        />
        <h4> Price </h4>

        <FormControlLabel
          value="end"
          control={<Radio name="DescendingOrder" size="small" />}
          label="Descending order"
        />
        <FormControlLabel
          value="end"
          control={<Radio name="Ascending" size="small" />}
          label="Ascending"
        />
        {/* 
         <button onClick={handleShowAll}>Show All</button> */}
      </div>

      <div id="type-product-container" className="products-container">
        <ul className="product-menu">
          {filteredProducts.length > 0 ? (
            // If there are filtered products, map over them and display
            filteredProducts.map((product) => (
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
            // If no products are available for the selected category, display a message
            <p>No products available for the selected category.</p>
          )}
        </ul>
      </div>
    </main>
  );
};

export default Products;
