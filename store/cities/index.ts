import { combineReducers } from 'redux';
import { CityListState, CityActionTypes } from './types';

const initialState: CityListState = {
  byId: {},
  allIds: [],
  fetchState: {
    loading: false,
    error: null,
  },
};

const byId = (state = initialState.byId, action): CityListState['byId'] => {
  if (action.payload && action.payload.data) {
    return {
      ...state,
      ...action.payload.data.entities.cities,
    };
  }
  return state;
};

const allIds = (state = initialState.allIds, action): CityListState['allIds'] => {
  switch (action.type) {
    case CityActionTypes.LIST_CITY_SUCCESS:
      return action.payload.data.result;
    case CityActionTypes.RESET:
      return initialState.allIds;
    default:
      return state;
  }
};

const fetchState = (state = initialState.fetchState, action): CityListState['fetchState'] => {
  switch (action.type) {
    case CityActionTypes.LIST_CITY_REQUEST:
      return { ...state, loading: true };
    case CityActionTypes.LIST_CITY_SUCCESS:
      return { ...state, loading: false, error: null };
    case CityActionTypes.LIST_CITY_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case CityActionTypes.RESET:
      return initialState.fetchState;
    default:
      return state;
  }
};

export default combineReducers({
  byId,
  allIds,
  fetchState,
});
