import {createStore, applyMiddleware} from 'redux';
import {persistStore} from "redux-persist"
import logger from 'redux-logger';

import rootReducer from "./rootReducer";

const middlewares = [logger];//more things will be added

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor = persistStore(store)
