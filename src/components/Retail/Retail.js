import React from "react";
import Logo from "./Logo/Logo";
import StoreExclusive from "./StoreExclusive/StoreExclusive";

const Retail = ({ changePage, setFilter }) => {
  return (
    <main>
      <Logo />
      <StoreExclusive changePage={changePage} setFilter={setFilter} />
    </main>
  );
};

export default Retail;
