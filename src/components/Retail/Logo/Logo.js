import React from "react";
import styles from "./Logo.module.css";
import kanyeface from "./kanyeface.png";
const Logo = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}><span className={styles.h1Span1}>RETAIL</span><span className={styles.h1Span2}> LUX</span></h1>
      <figure className={styles.fig}>
        <img className={styles.kanye} src={kanyeface} alt="kanyeface" />
      </figure>
    </div>
  );
};

export default Logo;
