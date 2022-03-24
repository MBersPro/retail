import React from "react";
import Product from "./Product/Product";
import styles from "./ProductList.module.css";

const ProductList = ({ products, addToKorzina, korzina, added }) => {
  return (
    <div>
      <main>
        <ul>
          {products.map((product) => (
            <Product
              product={product}
              addToKorzina={addToKorzina}
              korzina={korzina}
              added={added}
            />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProductList;
