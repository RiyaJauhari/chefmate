import React, { useState } from "react";

const Search = () => {
  const [ingredient, setIngredient] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchMeals = async () => {
    if (!ingredient.trim()) {
      setError("Please enter an ingredient.");
      return;
    }

    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const data = await res.json();
      if (data.meals) {
        setMeals(data.meals);
      } else {
        setMeals([]);
        setError("No meals found for this ingredient.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch meals. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") fetchMeals();
  };

  return (
    <div className="min-h-screen w-screen overflow-x-hidden bg-linear-to-b from-orange-50 to-white text-gray-800 flex flex-col items-center p-8">
      {/* Header */}
      <h1 className="text-4xl font-bold text-orange-600 mb-6">
        🍽️ Explore Recipes by Ingredient
      </h1>

      {/* Search bar */}
      <div className="flex w-full max-w-md mb-10">
        <input
          type="text"
          value={ingredient}
          onChange={(e) => setIngredient(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Enter an ingredient (e.g. chicken, beef, potato)"
          className="w-full p-3 rounded-l-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-500 text-gray-700"
        />
        <button
          onClick={fetchMeals}
          className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-r-xl font-semibold transition duration-200"
        >
          Search
        </button>
      </div>

      {/* Loading / Error */}
      {loading && <p className="text-lg text-orange-500 font-medium">Loading...</p>}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Meal grid */}
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full max-w-7xl">
        {meals.map((meal) => (
          <div
            key={meal.idMeal}
            className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
          >
            <img
              src={meal.strMealThumb}
              alt={meal.strMeal}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-800">{meal.strMeal}</h2>
              <button className="mt-3 bg-orange-500 text-white px-3 py-1 rounded-lg hover:bg-orange-600 text-sm">
                View Recipe
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
