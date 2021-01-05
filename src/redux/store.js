import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'
import reduxSaga from 'redux-saga'

import rootSaga from './sagas';

const sagaMiddleware = reduxSaga();

// store.getState()
// store.dispatch({})
// store.subscribe()

//Store (Almacenamiento de nuestro estado)
const store = createStore(
    rootReducer, 
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)

export default store;