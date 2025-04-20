import React, { useEffect, useState } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

function FoodDetails({ foodId }) {
  const url = `https://api.spoonacular.com/recipes/${foodId}/information`;
  //const API_KEY = "09e68ebcfe1f4ae28db31fb410a73ef9";
  const API_KEY = "791abb8f5d174f22b6ee0378a1ea43cf";
  const [food, setFood] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchDetails() {
      const res = await fetch(`${url}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log("Return Data : ", data);
      setFood(data);
      setLoading(true);
    }
    fetchDetails();
  }, [foodId]);

  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚{food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegetarian" : "🍗 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong> 👪 Servings :{food.servings}</strong>
          </span>
          <span>
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>
        </div>

        <div>
          <strong>
            💲<span>{food.pricePerServing / 100} per serving</span>
          </strong>
        </div>
        <h2>Ingredients</h2>
        <div>
          <ItemList food={food} loading={loading} />
        </div>
        <h2>Instruction</h2>
        <div className={styles.recipeInstruction}>
          <ol>
            {loading
              ? food.analyzedInstructions[0].steps.map((step) => (
                  <li key={step.number}>{step.step}</li>
                ))
              : "Loading ..."}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default FoodDetails;
