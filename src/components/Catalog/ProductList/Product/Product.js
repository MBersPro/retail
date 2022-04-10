import React from "react";
import styles from "./Product.module.css";

const Product = ({ product, addToKorzina, korzina, added }) => {
  const onAddToKorzina = () => {
    const id = product.id;
    addToKorzina(id);
  };

  return (
    <li className={styles.li}>
      <div className={styles.image_container}>
        <img className={styles.image} src={product.image} alt={product.name} />
      </div>
      <div className={styles.productCharactersContainer}>
        <div className={styles.p_contrainer}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{product.price}₽</p>
          {/* <p className={styles.season}>
            <span className={styles.season_span}>Сезон:</span>
            {product.seasons.map((season) => (
              <span className={styles.season_span}>{season}</span>
            ))}
          </p> */}
          <p className={styles.description}>
            <span className={styles.span_description}>Описание:   </span> 
            {product.description}
          </p>
        </div>

        <button
          className={
            added.includes(product.id)
              ? styles.buttonAdded
              : styles.buttonNotAdded
          }
          disabled={added.includes(product.id)}
          type="button"
          id={product.id}
          onClick={onAddToKorzina}
        >
          {added.includes(product.id) ? (
            <span>Добавлено</span>
          ) : (
            <span>Добавить в корзину</span>
          )}
        </button>
      </div>
    </li>
  );
};

export default Product;
