import React from "react";
import styles from "./Header.module.css";
const Header = ({ changePage }) => {

  const onChangePage = {
  }

  return (
    <header>
      <div className={styles.container}>
        <nav>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <button type="button" name="retail" onClick={onChangePage}>RETAIL</button>
            </li>
            <li className={styles.li}>
              <button>КАТАЛОГ</button>
            </li>
            <li className={styles.li}>
              <button>КОРЗИНА</button>
            </li>
            <li className={styles.li}>
              <button>КОНТАКТЫ</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
