import React, { useState } from "react";
import Header from "./Header/Header";
import Gradient from "./Reused/Gradient/Gradient";
import Catalog from "./Catalog/Catalog";
import Korzina from "./Korzina/Korzina";
import Kontakti from "./Kontakti/Kontakti";
import Retail from "./Retail/Retail";
import Footer from "./Footer/Footer";
import Instructions from "./Retail/Instructions/Instructions";

import { data } from "./../data/data";
import AboutUs from "./AboutUs/AboutUs";

const initialPage = {
  retail: true,
};

const App = () => {
  const [page, setPage] = useState({ ...initialPage });
  const [korzina, setKorzina] = useState([]);
  const [products, setProducts] = useState([...data]);

  const changePage = (page) => {
    setPage({ [page]: true });
  };

  const addToKorzina = (id) => {
    setKorzina((prev) => [
      ...prev,
      { ...products.find((product) => product.id === id) },
    ]);
    // setProducts((prev) => [
    //    ...prev.filter((product) => product.id !== id),
    //   { ...products.find((product) => product.id === id), added: true }
    // ]);

    // setProducts((prev) => [...prev.forEach((product) => if (product.id === id) {...product, added: true})]);
    // console.log()
  };

  const deleteFromKorzina = (id) => {
    setKorzina((prev) => [...prev.filter((product) => product.id !== id)]);
  };

  return (
    <>
      <Gradient>
        <Header changePage={changePage} />
        {page.retail && <Retail />}
      </Gradient>
      <AboutUs/>
      {page.katalog && (
        <Catalog
          addToKorzina={addToKorzina}
          products={products}
          korzina={korzina}
        />
      )}
      {page.korzina && (
        <Korzina korzina={korzina} deleteFromKorzina={deleteFromKorzina} />
      )}
      {page.kontakti && <Kontakti />}
      <Instructions />
      <Gradient>
        <Footer />
      </Gradient>
    </>
  );
};
export default App;
