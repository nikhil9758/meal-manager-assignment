import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavourite,
  removeFavourite,
} from "../../redux/slices/favouritesSlice";
import "./MealCard.css";
import { FaHeart, FaRegHeart } from "react-icons/fa";

/**
 * MealCard component to display individual meal information.
 * Allows users to add or remove meals from their favourites.
 * 
 * @param {Object} props - Component properties.
 * @param {Object} props.meal - The meal data to be displayed.
 * @param {string} props.layout - The layout style for the meal card.
 * 
 * @returns {JSX.Element} A styled card with meal details and favourite toggle functionality.
 */

const MealCard = ({ meal, layout }) => {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites.favourites);
  const isFavourite = favourites.some((fav) => fav.idMeal === meal.idMeal);

  /**
   * Toggles the favourite status of the meal.
   * Dispatches either addFavourite or removeFavourite action based on current favourite status.
   */
  const handleToggleFavourite = () => {
    if (isFavourite) {
      dispatch(removeFavourite({ idMeal: meal.idMeal }));
    } else {
      dispatch(addFavourite(meal));
    }
  };

  return (
    <div className={`meal-card ${layout}`}>
      <img src={meal.strMealThumb} alt={meal.strMeal} className="meal-image" />
      <div className="meal-details">
        <h3>{meal.strMeal}</h3>
        <div className="heart-icon" onClick={handleToggleFavourite}>
          {isFavourite ? (
            <FaHeart className="filled-heart" />
          ) : (
            <FaRegHeart className="empty-heart" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MealCard;
