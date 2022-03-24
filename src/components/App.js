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
      ...products.filter((product) => product.id === id),
    ]);
  };

  return (
    <>
      <Gradient>
        <Header changePage={changePage} />
        {page.retail && <Retail />}
      </Gradient>
      {page.katalog && (
        <Catalog addToKorzina={addToKorzina} products={products} />
      )}
      {page.korzina && <Korzina korzina={korzina} />}
      {page.kontakti && <Kontakti />}
      <Instructions />
      <Gradient>
        <Footer />
      </Gradient>
    </>
  );
};
export default App;
