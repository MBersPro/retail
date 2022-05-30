import React from "react";
import styles from "./Filter.module.css";

const Filter = ({ setFilter }) => {
  const onSetFilter = (e) => {
    const value = e.target.value;
    setFilter(value);
  };

  return (
    <div className={styles.container}>
      <ul>
        <li>
          <button type="button" value="all" onClick={onSetFilter}>
            Все
          </button>
        </li>
        <li>
          <button type="button" value="clothes" onClick={onSetFilter}>
            Одежда
          </button>
        </li>
        <li>
          <button type="button" value="sneakers" onClick={onSetFilter}>
            Обувь
          </button>
        </li>
        <li>
          <button type="button" value="outerwear" onClick={onSetFilter}>
            Верхняя одежда
          </button>
        </li>
        <li>
          <button type="button" value="pants" onClick={onSetFilter}>
            Джоггеры
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
