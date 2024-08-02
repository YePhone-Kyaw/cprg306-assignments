"use client";

import { useEffect, useState } from "react";

export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);
  const [isDefault, setDefault] = useState(true);
  const [currentItem, setCurrentItem] = useState(null);
  const [mealDetails, setMealDetails] = useState(null);

  //API Fetching Function for meal ideas based on the ingredient
  async function fetchMealIdeas(ingredient) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await response.json();
      return data.meals || [];
    } catch (error) {
      console.log(`Error: ${error.message}`);
      return [];
    }
  }

  // API fetching function for meal ingredient details
  async function fetchMealDetails(mealId) {
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
      );
      const data = await response.json();
      return data.meals && data.meals[0];
    } catch (error) {
      console.log(`Error: ${error.message}`);
      return [];
    }
  }


  //Function to handle meal details
  const handleMealDetails = (index, mealId) => {
    setCurrentItem(index === currentItem ? null : index);

    if (index != currentItem) {
      fetchMealDetails(mealId).then((details) => setMealDetails(details));
    }
  };

  //Load Function
  async function loadMealIdeas() {
    setDefault(true);
    const fetchMeals = await fetchMealIdeas(ingredient);
    setMeals(fetchMeals);
    setMealDetails(null);
    setCurrentItem(null);
    setDefault(false);
  };

  //Using useEffect
  useEffect(() => {
    if (ingredient) {
      loadMealIdeas();
    } else {
      setMeals([]);
      setMealDetails(null);
    }
  }, [ingredient]);

  if (isDefault) {
    return (
      <div>
        <header className="text-3xl">Meal Ideas</header>
        <p>Select an item to see meal ideas</p>
      </div>
    );
  }

  if (!meals.length) {
    return <p>No meal ideas found for {ingredient}</p>;
  }

  return (
    <div>
      <h2>Here are some meal ideas using {ingredient}</h2>
      <ul>
        {meals.map((meal, index) => (
          <li
            key={meal.idMeal}
            className="p-2 m-1 bg-gray-800/60 hover:bg-gray-800 rounded-lg max-w-md text-green-400"
          >
            <button
              onClick={() => handleMealDetails(index, meal.idMeal)}
              className="text-left"
            >
              {meal.strMeal}
              {currentItem === index && mealDetails && (
                <ul>
                  <li>Ingredients needed:</li>
                  {Object.keys(mealDetails).map((key) => {
                    if (key.startsWith("strIngredient") && mealDetails[key]) {
                      const measureKey = `strMeasure${key.slice(13)}`;
                      return (
                        <li className="pl-4 " key={key}>
                          {mealDetails[key] && mealDetails[measureKey] && (
                            <span>
                              {mealDetails[key]} ({mealDetails[measureKey]})
                            </span>
                          )}
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              )}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}


