// routes.js
import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MenuPage = lazy(() => import('./pages/MenuPage/MenuPage'));
const MealsPage = lazy(() => import('./pages/MealsPage/MealsPage'));
const FavouritesPage = lazy(() => import('./pages/FavouritesPage/FavouritesPage'));
const MealGeneratorPage = lazy(() => import('./pages/MealGeneratorPage/MealGeneratorPage'));
const AboutMePage = lazy(() => import('./pages/AboutMePage/AboutMePage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <NavBar />,
    children: [
      { index: true, element: <Suspense fallback={<div>Loading...</div>}><HomePage /></Suspense> },
      { path: 'menu', element: <Suspense fallback={<div>Loading...</div>}><MenuPage /></Suspense> },
      { path: 'meals/:category', element: <Suspense fallback={<div>Loading...</div>}><MealsPage /></Suspense> },
      { path: 'favourites', element: <Suspense fallback={<div>Loading...</div>}><FavouritesPage /></Suspense> },
      { path: 'generator', element: <Suspense fallback={<div>Loading...</div>}><MealGeneratorPage /></Suspense> },
      { path: 'about', element: <Suspense fallback={<div>Loading...</div>}><AboutMePage /></Suspense> },
      { path: '*', element: <Suspense fallback={<div>Loading...</div>}><NotFoundPage /></Suspense> }, // Handle unknown routes
    ],
  },
]);

export default router;
