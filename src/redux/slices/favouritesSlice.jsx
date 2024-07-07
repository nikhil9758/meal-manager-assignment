import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favourites: [], // Initial state containing an empty array for favourites
};

/**
 * Slice for managing favourites.
 */
const favouritesSlice = createSlice({
  name: 'favourites', 
  initialState,
  reducers: {
    /**
     * Action to add a meal to favourites.
     * 
     * @param {Object} state - The current state.
     * @param {Object} action - The action object containing payload with the meal to add.
     */
    addFavourite: (state, action) => {
      state.favourites.push(action.payload); // Add the new meal to favourites
    },
    /**
     * Action to remove a meal from favourites.
     * 
     * @param {Object} state - The current state.
     * @param {Object} action - The action object containing payload with the meal to remove.
     */
    removeFavourite: (state, { payload }) => {
      state.favourites = state.favourites.filter(meal => meal.idMeal !== payload.idMeal); // Remove the meal from favourites
    },
  },
});

// Export the action creators
export const {
  addFavourite,
  removeFavourite,
} = favouritesSlice.actions;

// Export the reducer as the default export
export default favouritesSlice.reducer;
