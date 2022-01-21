import { useEffect, useRef, useState } from 'react';
import { applyMiddleware, createStore, Store } from 'redux';
import { persistStore } from 'redux-persist';
import { Persistor } from 'redux-persist/es/types';
import createSagaMiddleware from 'redux-saga';

import rootSaga from '../../domain/root.saga';

import rootReducer from './root.reducer';
import { ApplicationState } from './types';

export const useStore = (): { store: Store<ApplicationState>; persistor: Persistor } | undefined => {
    const [, setIsReady] = useState(false);
    const redux = useRef<{ store: Store<ApplicationState>; persistor: Persistor }>();

    useEffect(() => {
        (async () => {
            const sagaMiddleware = createSagaMiddleware();
            const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

            redux.current = {
                store: store,
                persistor: persistStore(store),
            };

            sagaMiddleware.run(rootSaga);

            setIsReady(true);
        })();
    }, []);

    return redux.current;
};
