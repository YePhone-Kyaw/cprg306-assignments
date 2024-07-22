"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [selectedMeal, setSelectedMeal] = useState(null);

  //API Fetching Function
  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals;
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  }

  //Load Function
  const loadMealIdeas = async () => {
    const fetchMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchMeals);
  };

  //Using useEffect
  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  const selectMeal = (meal) => {
    setSelectedMeal(meal);
  };

  return (
    <div>
      <header className="text-3xl">Meal Ideas</header>
      <p>Here are som meal ideas using {ingredient}</p>
      <div className="">
        <ul className="flex flex-col m-4 p-5 bg-gray-800/60 rounded-lg max-w-lg" >
          {meals.length > 0 ? (
            meals.map((meal) => (
              <li key={meal.idMeal} onClick={() => selectMeal}>
                {meal.strMeal}
              </li>
            ))
          ) : (
            <li>No Meals found</li>
          )}
        </ul>
      </div>
      {selectedMeal && (
        <div>
          <h2>Ingredients needed for {selectedMeal.strMeal}:</h2>
          <ul>
            {selectedMeal.ingredients.map((ingredient, idMeal) => (
              <li key={idMeal}>
                {ingredient.quantity} {ingredient.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
