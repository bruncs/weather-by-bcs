import { ID, FetchState } from '../rootTypes';

export enum CityActionTypes {
  LIST_CITY_REQUEST = '@@cities/LIST_REQUEST',
  LIST_CITY_SUCCESS = '@@cities/LIST_SUCCESS',
  LIST_CITY_FAILURE = '@@cities/LIST_FAILURE',
  RESET = '@@cities/RESET',
}

export interface City {
  id: ID;
  name: string;
  minTemp: number;
  maxTemp: number;
}

export interface CityListState {
  byId: Record<ID, City>;
  allIds: City['id'][];
  fetchState: FetchState;
}
