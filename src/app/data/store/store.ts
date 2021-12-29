import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../../domain/root.saga";

import rootReducer from "./root.reducer";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)    
);

sagaMiddleware.run(rootSaga);

export default store;