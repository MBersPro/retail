import React, { useState } from "react";
import styles from "./Catalog.module.css"
import ProductList from "./ProductList/ProductList";
import Filter from "./Filter/Filter";
import { data } from "./../../data/data";

const Catalog = () => {
  const [products, setProducts] = useState([...data]);

  return (
    <main className={styles.container}>
      <Filter />
      <ProductList products={products} />
    </main>
  );
};

export default Catalog;
