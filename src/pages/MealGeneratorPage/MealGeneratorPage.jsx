import React from 'react';
import useFetchRandomMeal from '../../hooks/useFetchRandomMeal';
import MealCard from '../../components/MealCard/MealCard';
import './MealGeneratorPage.css';

/**
 * MealGeneratorPage Component
 * Renders the meal generator page which fetches and displays a random meal.
 * 
 * @component
 */

const MealGeneratorPage = () => {
  const { meal, loading, error, fetchRandomMeal } = useFetchRandomMeal();

  // Display loading message if data is being fetched
  if (loading) return <p>Loading...</p>;

  // Display error message if an error occurred
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='meal-generator-container'>
      <h1>Random Meal Generator</h1>      
      {/* Display the MealCard component if a meal is fetched */}
      {meal && <MealCard meal={meal} layout="random"/>}
      <button onClick={fetchRandomMeal}>Generate Another Meal</button>
    </div>
  );
};

export default MealGeneratorPage;
