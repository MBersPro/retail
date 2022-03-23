import React from "react";
import styles from "./Product.module.css"

const Product = ({ product }) => {
  return (
    <li>
      <img className={styles.image} src={product.image} alt={product.name} />
      <p>{product.name}</p>
    </li>
  );
};

export default Product;
