export enum CoordinatesActionTypes {
  SET_COORDINATES = '@@coordinates/SET',
  UNSET_COORDINATES = '@@coordinates/UNSET',
}

export type Coordinates = google.maps.LatLngLiteral;

export type CoordinatesState = Coordinates;
