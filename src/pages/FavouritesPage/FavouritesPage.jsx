import React from 'react';
import { useSelector } from 'react-redux';
import MealCard from '../../components/MealCard/MealCard';
import './FavouritesPage.css'
const FavouritesPage = () => {
  const favourites = useSelector((state) => state.favourites.favourites);

  if (favourites.length === 0) return <p>No favourite meals added yet.</p>;

  return (
    <div className='favourites-container'>
      <h1>My Favourites</h1>
      <div>
        {favourites.map((meal) => (
          <MealCard key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
