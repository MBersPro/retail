import React from "react";
import Product from "./Product/Product";
import styles from "./ProductList.module.css";

const ProductList = ({products, addToKorzina}) => {
  return (
    <div>
      <main>
        <ul>
          {products.map((product) => (
            <Product product={product} addToKorzina={addToKorzina} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
