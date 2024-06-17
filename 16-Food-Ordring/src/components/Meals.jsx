import { useState } from "react";
import { useEffect } from "react";
import MealItem from "./MealItem";

export default function Meals() {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");
      
      if(!response.ok){
        // ...
      }
      
      const resData = await response.json();
      setLoadedMeals(resData);
    }

    fetchMeals();
  }, []);

  return (
    <main>
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
    </main>
  );
}
