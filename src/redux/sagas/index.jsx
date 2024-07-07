import { all } from 'redux-saga/effects';
import mealsSaga from './mealsSaga';

export default function* rootSaga() {
  yield all([
    mealsSaga(),
  ]);
}
