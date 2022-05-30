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
import ModalProduct from "./ModalProduct/ModalProduct";

const initialPage = {
  retail: true,
};

const App = () => {
  const [added, setAdded] = useState([]);
  const [page, setPage] = useState({ ...initialPage });
  const [korzina, setKorzina] = useState([]);
  const [products, setProducts] = useState([...data]);
  const [modalImages, setModalImages] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const changePage = (page) => {
    setPage({ [page]: true });
  };

  const addToKorzina = (id, color) => {
    setKorzina((prev) => [
      ...prev,
      { ...products.find((product) => product.id === id), color: color },
    ]);
    setAdded((prev) => [...prev, { id, color }]);
  };

  const deleteFromKorzina = (id, color) => {
    setKorzina((prev) => [
      ...prev.filter(
        (product) => (product.id === id && product.color === color) !== true
      ),
    ]);
    setAdded((prev) => [
      ...prev.filter(
        (item) => (item.id === id && item.color === color) !== true
      ),
    ]);

    console.log(korzina);
    console.log(added);
    console.log(color);
    console.log(id);
  };

  const modalChanger = (products) => {
    setModalImages(products);
  };

  const modalClose = (e) => {
    if (e.code !== "Escape") {
      return;
    }
    setModalImages(null);
  };

  const modalClickClose = () => {
    setModalImages(null);
  };

  const rotationRight = () => {
    const imgNumberLenght = modalImages.length;
    if (currentImageIndex + 1 >= imgNumberLenght) {
      return setCurrentImageIndex(0);
    }
    setCurrentImageIndex((prev) => prev + 1);
    console.log(currentImageIndex);
  };

  const rotationLeft = () => {
    const imgNumberLenght = modalImages.length;
    if (currentImageIndex <= 0) {
      return setCurrentImageIndex(imgNumberLenght - 1);
    }
    setCurrentImageIndex((prev) => prev - 1);
    console.log(currentImageIndex);
  };

  const setFilter = (value) => {
    if (value === "all") {
      setProducts([...data]);
    } else {
      setProducts([...data.filter((product) => product.type === value)]);
    }
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
          modalChanger={modalChanger}
          setFilter={setFilter}
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
      {modalImages && (
        <ModalProduct
          modalImages={modalImages}
          currentImageIndex={currentImageIndex}
          rotationRight={rotationRight}
          rotationLeft={rotationLeft}
          modalClose={modalClose}
          modalClickClose={modalClickClose}
        />
      )}
    </>
  );
};
export default App;
