import { combineReducers } from 'redux';

import cities from './cities';
import coordinates from './coordinates';

const rootReducer = () => {
  return combineReducers({
    cities,
    coordinates,
  });
};

export default rootReducer;
