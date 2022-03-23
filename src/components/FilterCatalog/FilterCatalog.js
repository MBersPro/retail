import React from "react";
import { products } from "../../data/data";
import styles from "./FilterCatalog.module.css";
const FilterCatalog = () => {
  return (
    <div>
      <main>
        <ul>
          {products.map((product) => (
            <li>
              <img
                className={styles.image}
                src={product.image}
                alt={product.name}
              />
              <p>{product.name}</p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default FilterCatalog;
