import React from "react";
import styles from "./Catalog.module.css"
import ProductList from "./ProductList/ProductList";
import Filter from "./Filter/Filter";
// import { data } from "./../../data/data";

const Catalog = ({ addToKorzina, products, korzina, added}) => {
  return (
    <main className={styles.container}>
      <Filter />
      <ProductList products={products} addToKorzina={addToKorzina} korzina={korzina} added={added}/>
    </main>
  );
};

export default Catalog;
