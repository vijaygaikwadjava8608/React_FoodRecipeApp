import React from "react";
import styles from "./foodItem.module.css";
function FoodItem({ food, setFoodId }) {
  return (
    <div className={styles.itemContainer}>
      <img className={styles.itemImage} src={food.image} alt=""></img>
      <div className={styles.itemContaint}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.itemButtonContainer}>
        <button
          onClick={() => setFoodId(food.id)}
          className={styles.itemButton}
        >
          view recipe
        </button>
      </div>
    </div>
  );
}

export default FoodItem;
