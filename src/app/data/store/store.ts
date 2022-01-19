import { useEffect, useRef, useState } from "react";
import { applyMiddleware, createStore, Store } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "../../domain/root.saga";

import rootReducer from "./root.reducer";
import { ApplicationState } from "./types";

export const useStore = (): { store: Store<ApplicationState> } | undefined => {
    const [, setIsReady] = useState(false);
    const store = useRef<{ store: Store<ApplicationState> }>();

    useEffect(() => {
        (async () => {
            const sagaMiddleware = createSagaMiddleware();

            store.current = {
                store: createStore(
                    rootReducer,
                    applyMiddleware(sagaMiddleware)    
                )
            }

            sagaMiddleware.run(rootSaga);

            setIsReady(true)
        })();
    }, [])

    return store.current
}