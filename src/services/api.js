import axios from "axios";

export const fetchMealsFromApi = async () => {
  const response = await axios.get(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );
  return response.data.categories;
};

export const fetchMealsByCategoryFromApi = async (category) => {
  const response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );
  const data = await response.json();
  return data.meals;
};

export const fetchRandomMealFromApi = async () => {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );
  const data = await response.json();
  return data.meals[0];
};
