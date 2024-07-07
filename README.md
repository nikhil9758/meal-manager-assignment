# Project Documentation

## Overview

## Features
- Display a list of meals by category
- Generate random meal ideas
- Add meals to favorites
- About Me section
- Comprehensive error handling
- 404 Page for unknown routes
- Navigation bar including all website states (Home, Menu, My Favourites, Meal Generator, About Me)
- Store home page, leading to the menu, user’s favourites, or the random meal generator
- Meals page with details like image, name, and the ability to add/remove from favourites
## Design Patterns
- **Componentization**: Reusable UI components (e.g., NavBar, MealCard)
- **Custom Hooks**: Encapsulate logic (e.g., `useFetchMeals`)
- **Redux**: Centralized state management with Redux Toolkit and Redux Saga for handling side effects

## Coding Standards
- **Naming Conventions**: PascalCase for components, camelCase for variables and functions
- **Code Reusability**: Use of custom hooks and reusable components
- **Error Handling**: Comprehensive error handling for all API calls and components

