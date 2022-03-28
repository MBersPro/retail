import React, { useState } from "react";
import styles from "./Product.module.css";

const Product = ({ product, addToKorzina, korzina, added }) => {
  const onAddToKorzina = () => {
    const id = product.id;
    addToKorzina(id);
  };

  return (
    <li className={styles.li}>
    <div className={styles.divProduct}>
        <img className={styles.image} src={product.image} alt={product.name} />
        <p className={styles.p}>{product.name}</p>
        <button
          className={
            added.includes(product.id)
              ? styles.buttonAdded
              : styles.buttonNotAdded
          }
          type="button"
          id={product.id}
          onClick={onAddToKorzina}
        >
        {added.includes(product.id) ? (
          <span>Товар добавлен в корзину</span>
        ) : (
          <span>Добавить в корзину</span>
        )}
      </button>
      </div>
    </li>
  );
};

export default Product;
