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
import Benefits from "./Benefits/Benefits";

const initialPage = {
  retail: true,
};

const App = () => {
  const [added, setAdded] = useState([]);
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
    setAdded((prev) => [...prev, id]);
  };

  const deleteFromKorzina = (id) => {
    setKorzina((prev) => [...prev.filter((product) => product.id !== id)]);
    setAdded((prev) => [...prev.filter((item) => item !== id)])
  };

  return (
    <>
      <Gradient>
        <Header changePage={changePage} />
        {page.retail && <Retail />}
      </Gradient>
      {page.retail && <AboutUs changePage={changePage} />}
      {/* {page.retail && <Benefits/>} */}
      {page.katalog && (
        <Catalog
          addToKorzina={addToKorzina}
          products={products}
          korzina={korzina}
          added={added}
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
