import React from "react";
import "./ProductList.css";

import ProductPreview from "../ProductPreview/ProductPreview";

const ProductList = ({ products = "loading" }) => {
  return (
    <div className="row ListContainer">
      <h5>
        {products === "loading"
          ? "Loading Products"
          : `Found ${products.length} Products`}
      </h5>
      {products !== "loading"
        ? products.map((product, key) => (
            <div key={"item" + key} className="col m3 s6">
              <ProductPreview key={"item" + key} product={product} />
            </div>
          ))
        : ""}
    </div>
  );
};

export default ProductList;
