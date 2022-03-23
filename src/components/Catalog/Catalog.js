import React, { useState } from "react";
import ProductList from "./ProductList/ProductList";
import Filter from "./Filter/Filter";
import { data } from "./../../data/data";

const Catalog = () => {
  const [products, setProducts] = useState([...data]);

  return (
    <main>
      <Filter />
      <ProductList products={products} />
    </main>
  );
};

export default Catalog;
