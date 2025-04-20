import React, { useEffect, useState } from "react";
import styles from "./search.module.css";

const url = "https://api.spoonacular.com/recipes/complexSearch";
//const API_KEY = "09e68ebcfe1f4ae28db31fb410a73ef9";
const API_KEY = "791abb8f5d174f22b6ee0378a1ea43cf";
function Search({ foodData, setFoodData }) {
  const [query, setQuery] = useState("Pizza");
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${url}?query=${query}&apiKey=${API_KEY}`);
      const data = await res.json();
      setFoodData(data.results);
      console.log(data.results);
    }
    fetchFood();
  }, [query]);

  return (
    <div className={styles.searchContainer}>
      <input
        className={styles.input}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </div>
  );
}

export default Search;
