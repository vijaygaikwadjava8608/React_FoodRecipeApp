import React from "react";
import styles from "./container.module.css";
import FoodList from "./FoodList";

export default function Container({ children }) {
  return <div className={styles.parentContainer}>{children}</div>;
}
