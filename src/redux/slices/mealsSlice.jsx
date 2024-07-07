import { createSlice } from '@reduxjs/toolkit';

// Initial state for the meals slice
const initialState = {
  meals: [], // Array to store meals
  loading: false, 
  error: null, 
};

/**
 * Slice for managing meals.
 */
const mealsSlice = createSlice({
  name: 'meals', 
  initialState,
  reducers: {
    /**
     * Action to handle the start of fetching meals.
     * 
     * @param {Object} state - The current state.
     */
    fetchMealsRequest: (state) => {
      state.loading = true; 
    },
    /**
     * Action to handle the successful fetch of meals.
     * 
     * @param {Object} state - The current state.
     * @param {Object} action - The action object containing payload with the fetched meals.
     */
    fetchMealsSuccess: (state, action) => {
      state.loading = false; 
      state.meals = action.payload; // Update meals with the fetched data
    },
    /**
     * Action to handle the failure of fetching meals.
     * 
     * @param {Object} state - The current state.
     * @param {Object} action - The action object containing payload with the error message.
     */
    fetchMealsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload; 
    },
  },
});

// Export the action creators
export const {
  fetchMealsRequest,
  fetchMealsSuccess,
  fetchMealsFailure,
} = mealsSlice.actions;

// Export the reducer as the default export
export default mealsSlice.reducer;
