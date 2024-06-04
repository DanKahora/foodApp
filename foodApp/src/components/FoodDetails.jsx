import { useState } from "react";
import { useEffect } from "react";
import styles from "./foodDetails.module.css";
import ItemList from "./ItemList";

const API_KEY = "ac6045accb01432982bc01357a0a90b6";

export default function FoodDetails({ foodId }) {
  const [food, setFood] = useState({});
  const [isLoading, setisLoading] = useState(true);
  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/${foodId}/information?apiKey=${API_KEY}`
      );
      const data = await res.json();
      console.log(data);
      setFood(data);
      setisLoading(false);
    }
    fetchFood();
  }, [foodId]);
  return (
    <div>
      <div className={styles.recipeCard}>
        <h1 className={styles.recipeName}> {food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⏰ {food.readyInMinutes} Minutes</strong>
          </span>
          <span>
            👨‍👨‍👧<strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? "🥕 Vegeterian" : "🥩 Non-Vegetarian"}
            </strong>
          </span>
          <span>
            {" "}
            <strong>{food.vegan ? "🐮 Vegan" : ""}</strong>
          </span>{" "}
        </div>
        <div>
          {" "}
          $
          <span>
            {" "}
            <strong>{food.pricePerServing} Per serving</strong>
          </span>
        </div>

        <div>
          <h2>Ingredients</h2>
          <div>
            <ItemList food={food} isLoading={isLoading} />
          </div>
          <h1>Instructions</h1>
          <div className={styles.recipeInstructions}>
            <ol>
              {isLoading ? (
                <p>Loading....</p>
              ) : (
                food.analyzedInstructions[0].steps.map((step) => (
                  <li>{step.step}</li>
                ))
              )}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
