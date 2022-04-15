import React from 'react';
import styles from "./KorzinaProduct.module.css"

const KorzinaProduct = ({ product, deleteFromKorzina }) => {
  const onDeleteFromKorzina = (e) => {
    const id = e.target.id;
    deleteFromKorzina(id);
  };
  return (
    <li className={styles.li}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={product.image[product.color][0]}
          alt={product.name}
        />
      </div>
      <div className={styles.korzinaCharactersContainer}>
        <div className={styles.p_contrainer}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{product.price}₽</p>
          <p className={styles.season}>
            <span className={styles.season_span}>Сезон:</span>
            {product.seasons.map((season) => (
              <span className={styles.season_span}>{season}</span>
            ))}
          </p>
          <p className={styles.Articul}>Артикул: {product.id}</p>
        </div>

        <button
          className={styles.btnDel}
          type="button"
          id={product.id}
          onClick={onDeleteFromKorzina}
        >
          Удалить из корзины
        </button>
      </div>
    </li>
  );
};

export default KorzinaProduct;