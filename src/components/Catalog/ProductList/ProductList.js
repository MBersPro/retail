import React, { useState } from "react";
import Product from "./Product/Product";
import styles from "./ProductList.module.css";

const ProductList = ({products}) => {
  return (
    <div>
      <main>
        <ul>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
