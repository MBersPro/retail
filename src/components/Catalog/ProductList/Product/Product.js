import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, addToKorzina, korzina, added }) => {
  const onAddToKorzina = () => {
    const id = product.id;
    addToKorzina(id);
  };

  return (
    <li className={styles.li}>
      <div>
        <img className={styles.image} src={product.image} alt={product.name} />
      </div>
      <div className={styles.productCharactersContainer}>
        <div className={styles.p_contrainer}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{product.price}₽</p>
        </div>

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
            <span>Добавлено в корзину</span>
          ) : (
            <span>Добавить в корзину</span>
          )}
        </button>
      </div>
    </li>
  );
};

export default Product;
