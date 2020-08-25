import { call, put } from 'redux-saga/effects';
import api from '../../services/open-weather/api';

import { listCityRequest, listCitySuccess, listCityFailure } from './actions';

export function* list(action: ReturnType<typeof listCityRequest>) {
  const { coordinates } = action.payload;
  const { lat, lng } = coordinates;

  try {
    const response = yield call(api.get, `find?lat=${lat}&lon=${lng}&cnt=15&units=metric`);

    yield put(listCitySuccess(response.data.list));
  } catch (err) {
    yield put(listCityFailure(err));
  }
}
