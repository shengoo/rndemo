import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger'

export default (rootReducer, rootSaga) => {

    const middleware = []
    const enhancers = []

    middleware.push(logger)

    const sagaMiddleware = createSagaMiddleware()
    middleware.push(sagaMiddleware)

    enhancers.push(applyMiddleware(...middleware))

    const store = createStore(rootReducer, compose(...enhancers))

    let sagasManager = sagaMiddleware.run(rootSaga)

    return {
        store,
        sagasManager,
        sagaMiddleware
    }

}
