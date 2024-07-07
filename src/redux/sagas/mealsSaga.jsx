import { call, put, takeLatest } from 'redux-saga/effects';
import { fetchMealsRequest, fetchMealsSuccess, fetchMealsFailure } from '../slices/mealsSlice';
import { fetchMealsFromApi } from '../../services/api';

/**
 * Generator function to handle fetching meals.
 * 
 * @generator
 */
function* fetchMeals() {
  try {
    const meals = yield call(fetchMealsFromApi); // Call API to fetch meals
    yield put(fetchMealsSuccess(meals)); // Dispatch success action with fetched meals
  } catch (error) {
    yield put(fetchMealsFailure(error.toString())); // Dispatch failure action with error message
  }
}

/**
 * Root saga to watch for fetchMealsRequest actions.
 * 
 * @generator
 */
function* mealsSaga() {
  yield takeLatest(fetchMealsRequest.type, fetchMeals); // Take the latest fetchMealsRequest action and call fetchMeals
}

export default mealsSaga;
