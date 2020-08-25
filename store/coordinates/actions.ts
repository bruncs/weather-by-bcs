import { action } from 'typesafe-actions';

import { CoordinatesActionTypes } from './types';

export const setCoordinates = (coordinates: google.maps.LatLngLiteral) =>
  action(CoordinatesActionTypes.SET_COORDINATES, { coordinates });

export const unsetCoordinates = () => action(CoordinatesActionTypes.UNSET_COORDINATES);
