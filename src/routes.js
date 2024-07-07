// routes.js
import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
const HomePage = lazy(() => import('./containers/HomePage/HomePage'));
const MenuPage = lazy(() => import('./containers/MenuPage/MenuPage'));
const MealsPage = lazy(() => import('./containers/MealsPage/MealsPage'));
const FavouritesPage = lazy(() => import('./containers/FavouritesPage/FavouritesPage'));
const MealGeneratorPage = lazy(() => import('./containers/MealGeneratorPage/MealGeneratorPage'));
const AboutMePage = lazy(() => import('./containers/AboutMePage/AboutMePage'));
const NotFoundPage = lazy(() => import('./containers/NotFoundPage/NotFoundPage'));

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
