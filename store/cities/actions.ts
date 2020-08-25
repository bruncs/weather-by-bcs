import { action } from 'typesafe-actions';
import { normalize } from 'normalizr';

import { CityActionTypes } from './types';
import { cityListSchema } from '../../services/open-weather/schema';

export const listCityRequest = (coordinates: google.maps.LatLngLiteral) =>
  action(CityActionTypes.LIST_CITY_REQUEST, { coordinates });

export const listCitySuccess = (data) =>
  action(CityActionTypes.LIST_CITY_SUCCESS, { data: normalize(data, cityListSchema) });

export const listCityFailure = (error: Error) => action(CityActionTypes.LIST_CITY_FAILURE, { error });

export const reset = () => action(CityActionTypes.RESET);
