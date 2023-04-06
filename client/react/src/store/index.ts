import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';

// @ts-ignore The module implicitly have any as it type since it doesn't have a d.ts file
import reducers from './reducers/index';
import sagas from './sagas/index';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const initialState = {};
const sagaMiddleware = createSagaMiddleWare();

const middlewares = [sagaMiddleware];

const enhancers = [applyMiddleware(...middlewares)];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export type RootState = ReturnType<typeof reducers>;

const store = createStore(
  reducers,
  initialState,
  composeEnhancers(...enhancers) as any
);

sagaMiddleware.run(sagas);

export default store;
