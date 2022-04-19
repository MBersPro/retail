import React from "react";
import Product from "./Product/Product";
import styles from "./ProductList.module.css";

const ProductList = ({
  products,
  addToKorzina,
  korzina,
  added,
  modalChanger,
}) => {
  return (
    <div className={styles.container}>
      <ul className={styles.ul}>
        {products.map((product) => (
          <li className={styles.li} key={product.id}>
            <Product
              product={product}
              addToKorzina={addToKorzina}
              korzina={korzina}
              added={added}
              modalChanger={modalChanger}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
