import React from "react";
import Product from "./Product/Product";
import styles from "./ProductList.module.css";

const ProductList = ({ products, addToKorzina, korzina, added }) => {
  return (
    <div className={styles.container}>
        <ul className={styles.ul}>
          {products.map((product) => (
            <Product
              product={product}
              addToKorzina={addToKorzina}
              korzina={korzina}
              added={added}
            />
          ))}
        </ul>
    </div>
  );
};

export default ProductList;
