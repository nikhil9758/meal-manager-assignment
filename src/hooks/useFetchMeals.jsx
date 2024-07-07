import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMealsRequest } from '../redux/slices/mealsSlice';

/**
 * Custom hook to fetch meals from the API using Redux for state management.
 * 
 * @returns {Object} An object containing meals, loading status, and error message.
 */

const useFetchMeals = () => {
  const dispatch = useDispatch(); // Hook to dispatch actions
  const { meals, loading, error } = useSelector(state => state.meals); // Access meals state from Redux store

  useEffect(() => {
    dispatch(fetchMealsRequest()); // Dispatch fetchMealsRequest action when component mounts
  }, [dispatch]);

  // Handle error appropriately
  if (error) {
    console.error("Error fetching meals:", error);
  }
  
  return { meals, loading, error }; // Return meals, loading, and error state
};

export default useFetchMeals;
