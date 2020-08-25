import { CoordinatesState, CoordinatesActionTypes } from './types';

const initialState: CoordinatesState = null;

const reducer = (state = initialState, action): CoordinatesState => {
  switch (action.type) {
    case CoordinatesActionTypes.SET_COORDINATES:
      return { ...state, ...action.payload.coordinates };
    case CoordinatesActionTypes.UNSET_COORDINATES:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
