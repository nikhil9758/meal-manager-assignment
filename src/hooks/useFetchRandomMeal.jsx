import { useState, useEffect } from 'react';
import { fetchRandomMealFromApi } from '../services/api';

/**
 * Custom hook to fetch a random meal from the API.
 * 
 * @returns {Object} An object containing the meal, loading status, error message, and a function to fetch a new random meal.
 */
const useFetchRandomMeal = () => {
  const [meal, setMeal] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null);

  /**
   * Fetches a random meal from the API.
   */
  const fetchRandomMeal = async () => {
    try {
      setLoading(true); // Set loading state to true before fetching
      const data = await fetchRandomMealFromApi(); // Fetch data from API
      setMeal(data); // Set meal state with fetched data
    } catch (err) {
      setError(err.message); // Set error state with error message
    } finally {
      setLoading(false); // Set loading state to false after fetching is complete
    }
  };

  // Fetch a random meal when the component mounts
  useEffect(() => {
    fetchRandomMeal();
  }, []);

  return { meal, loading, error, fetchRandomMeal }; // Return meal, loading, error, and fetchRandomMeal function
};

export default useFetchRandomMeal;
