import React from "react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

/**
 * HomePage Component
 * Renders the home page with navigation buttons.
 * 
 * @component
 */

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <h1>Home Page</h1>
      <div className="button-container">
        <button onClick={() => navigate("/menu")}>Go to Menu</button>
        <button onClick={() => navigate("/favourites")}>
          Go to Favourites
        </button>
        <button onClick={() => navigate("/generator")}>Generate a Meal</button>
      </div>
    </div>
  );
};

export default HomePage;
