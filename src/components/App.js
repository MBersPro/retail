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
import ModalProduct from "./ModalProduct/ModalProduct";

const initialPage = {
  retail: true,
};

const App = () => {
  const [added, setAdded] = useState([]);
  const [page, setPage] = useState({ ...initialPage });
  const [korzina, setKorzina] = useState([]);
  const [products, setProducts] = useState([...data]);
  const [modal, setModal] = useState(false);
  const [modalImages, setModalImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
    setAdded((prev) => [...prev.filter((item) => item !== id)]);
  };

  const modalChanger = (products) => {
    setModalImages(products);
    setModal(true);
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
      {modal && (
        <ModalProduct
          modalImages={modalImages}
          currentImageIndex={currentImageIndex}
          rotationRight={rotationRight}
          rotationLeft={rotationLeft}
        />
      )}
    </>
  );
};
export default App;
