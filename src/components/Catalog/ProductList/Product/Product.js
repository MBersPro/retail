import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, addToKorzina }) => {
  const onAddToKorzina = (e) => {
    const id = e.target.id;
    addToKorzina(id);
  };

  return (
    <li className={styles.li}>
      <img className={styles.image} src={product.image} alt={product.name} />
      <p className={styles.p}>{product.name}</p>
      <button type="button" id={product.id} onClick={onAddToKorzina}>
        Добавить в корзину
      </button>
    </li>
  );
};

export default Product;
