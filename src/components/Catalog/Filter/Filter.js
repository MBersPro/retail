import React, { useState } from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  const [filter, setFilter] = useState(false);

  return (
    <div className={styles.container}>
      <button className={styles.filter_button} type="button">
        Фильтр
      </button>
      <form>
        <label>
          <input type="radio" name="sex" />
          <input type="radio" name="sex" />
        </label>
        <label>
          <input type="radio" />
        </label>
        <input type="reset" name="same" />
      </form>
    </div>
  );
};

export default Filter;
