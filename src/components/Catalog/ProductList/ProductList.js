import React from "react";
import Product from "./Product/Product";
import styles from "./ProductList.module.css";

const ProductList = ({ products, addToKorzina, korzina }) => {
  return (
    <div>
      <main>
        <ul>
          {products.map((product) => (
            <Product
              product={product}
              addToKorzina={addToKorzina}
              korzina={korzina}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
