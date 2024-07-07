import React from 'react';
import useFetchMeals from '../../hooks/useFetchMeals';
import { useNavigate } from 'react-router-dom';
import './MenuPage.css';

/**
 * MenuPage Component
 * Renders a page displaying meal categories.
 * 
 * @component
 */
const MenuPage = () => {
  const { meals, loading, error } = useFetchMeals(); // Fetches all meal categories
  const navigate = useNavigate(); 

  // Display loading message if data is being fetched
  if (loading) return <p>Loading...</p>;

  // Display error message if an error occurred
  if (error) return <p>Error: {error}</p>;

  return (
    <div className='menu-container'>
      <h1>Menu</h1>
      <div className='categories-grid'>
        {/* Maps over the meals array and renders a div for each category */}
        {meals.map((meal) => (
          <div key={meal.idCategory} onClick={() => navigate(`/meals/${meal.strCategory}`)}>
            <img src={meal.strCategoryThumb} alt={meal.strCategory} />
            <h3>{meal.strCategory}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
