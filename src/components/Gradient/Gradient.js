import React from "react";
import styles from "./Gradient.module.css"

const Gradient = ({ children }) => {
  return <div className={styles.gradient}>{children}</div>;
};

export default Gradient;
