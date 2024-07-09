import axios from 'axios';

export const fetchMealsFromApi = async () => {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/categories.php'
    );
    if (response.data && response.data.categories) {
      return response.data.categories;
    } else {
      throw new Error('No categories found in response.');
    }
  } catch (error) {
    console.error('Error fetching meals:', error.message);
    throw new Error('Failed to fetch meal categories. Please try again later.');
  }
};

export const fetchMealsByCategoryFromApi = async (category) => {
  try {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
    );
    if (response.data && response.data.meals) {
      return response.data.meals;
    } else {
      throw new Error('No meals found for the selected category.');
    }
  } catch (error) {
    console.error('Error fetching meals by category:', error.message);
    throw new Error('Failed to fetch meals by category. Please try again later.');
  }
};

export const fetchRandomMealFromApi = async () => {
  try {
    const response = await axios.get(
      'https://www.themealdb.com/api/json/v1/1/random.php'
    );
    if (response.data && response.data.meals && response.data.meals[0]) {
      return response.data.meals[0];
    } else {
      throw new Error('No random meal found.');
    }
  } catch (error) {
    console.error('Error fetching random meal:', error.message);
    throw new Error('Failed to fetch a random meal. Please try again later.');
  }
};
