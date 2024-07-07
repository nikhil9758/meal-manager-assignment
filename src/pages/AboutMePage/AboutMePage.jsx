import React from 'react';
import './AboutMePage.css';

const AboutMePage = () => {
  return (
    <div className="about-me-container">
      <h1>About Me</h1>
      <div className="about-me-content">
        <p>
          Hello! I'm Nikhil Gupta, a passionate web developer. I designed this single page application to provide users with an easy way to explore and manage their favorite meals. 
        </p>

        <h2>Project Documentation</h2>
        
        <h3>Overview</h3>
        <p>
          This single page application is designed to provide users with an easy way to explore and manage their favorite meals. It includes features to browse meals by category, generate random meal ideas, and maintain a list of favorite meals. The application is built using React, Redux, and Redux Saga for state management and side effects.
        </p>

        <h3>Features</h3>
        <ul>
          <li>Display a list of meals by category</li>
          <li>Generate random meal ideas</li>
          <li>Add meals to favorites</li>
          <li>About Me section</li>
          <li>Comprehensive error handling</li>
          <li>404 Page for unknown routes</li>
          <li>Navigation bar including all website states (Home, Menu, My Favourites, Meal Generator, About Me)</li>
          <li>Store home page, leading to the menu, user’s favourites, or the random meal generator</li>
          <li>Meals page with details like image, name, and the ability to add/remove from favourites</li>
        </ul>

        <h3>Design Patterns</h3>
        <ul>
          <li><strong>Componentization</strong>: Reusable UI components (e.g., NavBar, MealCard)</li>
          <li><strong>Custom Hooks</strong>: Encapsulate logic (e.g., `useFetchMeals`)</li>
          <li><strong>Redux</strong>: Centralized state management with Redux Toolkit and Redux Saga for handling side effects</li>
        </ul>

        <h3>Coding Standards</h3>
        <ul>
          <li><strong>Naming Conventions</strong>: PascalCase for components, camelCase for variables and functions</li>
          <li><strong>Code Reusability</strong>: Use of custom hooks and reusable components</li>
          <li><strong>Error Handling</strong>: Comprehensive error handling for all API calls and components</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutMePage;
