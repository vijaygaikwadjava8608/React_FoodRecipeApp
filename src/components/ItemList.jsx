import React from "react";
import Item from "./Item";

function ItemList({ food, loading }) {
  return (
    <div>
      {loading
        ? food.extendedIngredients.map((item) => <Item item={item} />)
        : "Loading ..."}

      {}
    </div>
  );
}

export default ItemList;
