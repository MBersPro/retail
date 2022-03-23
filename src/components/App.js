import React, { useState } from "react";
import Header from "./Header/Header";
import Gradient from "./Reused/Gradient/Gradient";
import Catalog from "./Catalog/Catalog";
import Korzina from "./Korzina/Korzina";
import Kontakti from "./Kontakti/Kontakti";
import Retail from "./Retail/Retail";
import Footer from "./Footer/Footer";
import Instructions from "./Retail/Instructions/Instructions";

const initialPage = {
  retail: true,
};

const App = () => {
  const [page, setPage] = useState({ ...initialPage });

  const changePage = (page) => {
    setPage({ [page]: true });
  };

  return (
    <>
      <Gradient>
        <Header changePage={changePage} />
        {page.retail && <Retail />}
      </Gradient>
      {page.katalog && <Catalog />}
      {page.korzina && <Korzina />}
      {page.kontakti && <Kontakti />}
      <Instructions />
      <Gradient>
        <Footer />
      </Gradient>
    </>
  );
};
export default App;
