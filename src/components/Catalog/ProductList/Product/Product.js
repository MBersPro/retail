import React, { useState } from "react";
import styles from "./Product.module.css";

const Product = ({
  product,
  addToKorzina,
  added,
  modalChanger,
  changeColor,
}) => {
  const [color, setColor] = useState(Object.keys(product.image)[0]);

  const [image, setImage] = useState(
    product.image[Object.keys(product.image)[0]]
  );

  const onAddToKorzina = () => {
    const id = product.id;
    addToKorzina(id, color);
  };

  const onModalChanger = () => {
    modalChanger(image);
    console.log(image);
  };

  // const onChangeColor = () => {
  //   changeColor();
  // };

  const onImageChanger = (e) => {
    const id = e.target.id;
    setImage(product.image[id]);
  };

  return (
    <li className={styles.li}>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={image[0]}
          alt={product.name}
          onClick={onModalChanger}
        />
      </div>
      <div className={styles.productCharactersContainer}>
        <div className={styles.p_contrainer}>
          <p className={styles.name}>{product.name}</p>
          <p className={styles.price}>{product.price}₽</p>
          <div className={styles.colorsContainer}>
            {Object.keys(product.image).map((color) => (
              <div
                id={color}
                onClick={onImageChanger}
                className={styles[color]}
              ></div>
            ))}
          </div>
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
