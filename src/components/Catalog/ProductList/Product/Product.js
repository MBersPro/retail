import React, { useState } from "react";
import styles from "./Product.module.css";
import { v4 as uuidv4 } from "uuid";

const Product = ({
  product,
  addToKorzina,
  added,
  modalChanger,
  changeColor,
}) => {
  const [color, setColor] = useState(Object.keys(product.image)[0]);
  const [colorPath, setColorPath] = useState(product.image[color]);
  const [productIdentifier, setProductIdentifier] = useState({
    id: uuidv4(),
    color,
    colorPath,
  });

  const onAddToKorzina = () => {
    const id = product.id;
    addToKorzina(id, color);
  };

  const onModalChanger = () => {
    modalChanger(colorPath);
  };

  const onImageChanger = (e) => {
    const color = e.target.id;
    setColorPath(product.image[color]);
    setColor(color);
  };

  return (
    <>
      <div className={styles.image_container}>
        <img
          className={styles.image}
          src={colorPath[0]}
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
            added.some((element) => {
              if (element.id === product.id && element.color === color) {
                return true;
              }
            })
              ? styles.buttonAdded
              : styles.buttonNotAdded
          }
          disabled={added.some((element) => {
            if (element.id === product.id && element.color === color) {
              return true;
            }
          })}
          type="button"
          id={product.id}
          onClick={onAddToKorzina}
        >
          {added.some((element) => {
            if (element.id === product.id && element.color === color) {
              return true;
            }
          }) ? (
            <span>Добавлено</span>
          ) : (
            <span>Добавить в корзину</span>
          )}
        </button>
      </div>
    </>
  );
};

export default Product;
