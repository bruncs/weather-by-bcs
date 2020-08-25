import { createStore, applyMiddleware, Middleware, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

import { CityListState } from './cities/types';
import { CoordinatesState } from './coordinates/types';

export interface ApplicationState {
  cities: CityListState;
  coordinates: CoordinatesState;
}

const sagaMiddleware = createSagaMiddleware();

const middlewares: Middleware[] = [sagaMiddleware];

const store: Store<ApplicationState> = createStore(rootReducer(), applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);

export default store;
