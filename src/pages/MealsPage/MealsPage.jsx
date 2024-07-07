import React from 'react';
import { useParams } from 'react-router-dom';
import useFetchMealsByCategory from '../../hooks/useFetchMealsByCategory';
import MealCard from '../../components/MealCard/MealCard';
import './MealsPage.css';

/**
 * MealsPage Component
 * Renders a page displaying meals based on the selected category.
 * 
 * @component
 */

const MealsPage = () => {
  const { category } = useParams(); // Retrieves the category parameter from the URL
  const { meals, loading, error } = useFetchMealsByCategory(category); // Fetches meals by category

  // Display loading message if data is being fetched
  if (loading) return <p>Loading...</p>;

  // Display error message if an error occurred
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='meals-container'>
      <h1>Meals in {category}</h1>
      <div className="meals-grid">
        {/* Maps over the meals array and renders a MealCard for each meal */}
        {meals.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default MealsPage;
