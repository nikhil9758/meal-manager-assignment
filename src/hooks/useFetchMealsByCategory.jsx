import { useState, useEffect } from 'react';
import { fetchMealsByCategoryFromApi } from '../services/api';

/**
 * Custom hook to fetch meals by category from the API.
 * 
 * @param {string} category - The category of meals to fetch.
 * @returns {Object} An object containing meals, loading status, and error message.
 */

const useFetchMealsByCategory = (category) => {
  const [meals, setMeals] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    /**
     * Fetches meals by category from the API.
     */
    const fetchMeals = async () => {
      try {
        const data = await fetchMealsByCategoryFromApi(category); // Fetch data from API
        setMeals(data); // Set meals state with fetched data
      } catch (err) {
        setError(err.message); // Set error state with error message
      } finally {
        setLoading(false); // Set loading state to false after fetching is complete
      }
    };

    fetchMeals();
  }, [category]); // Effect runs when category changes

  return { meals, loading, error }; // Return meals, loading, and error state
};

export default useFetchMealsByCategory;
