import { all, takeLatest } from 'redux-saga/effects';

import { CityActionTypes } from './cities/types';
import { list as listCities } from './cities/sagas';

export default function* rootSaga() {
  return yield all([takeLatest(CityActionTypes.LIST_CITY_REQUEST, listCities)]);
}
