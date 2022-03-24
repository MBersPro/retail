import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, addToKorzina, korzina }) => {
  const onAddToKorzina = (e) => {
    const id = e.target.id;
    addToKorzina(id);
  };

  return (
    <li className={styles.li}>
      <img className={styles.image} src={product.image} alt={product.name} />
      <p className={styles.p}>{product.name}</p>
      <button
        className={product.added ? styles.buttonAdded : styles.buttonNotAdded}
        type="button"
        id={product.id}
        onClick={onAddToKorzina}
      >
        Добавить в корзину
        {/* {product.id === "00001" ? (
          <span>Добавить в корзину</span>
        ) : (
          <span>sdlifelinf</span>
        )}  */}
      </button>
    </li>
  );
};

export default Product;
