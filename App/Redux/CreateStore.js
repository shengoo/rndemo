import {createStore, applyMiddleware, compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export default (rootReducer, rootSaga) => {

    const middleware = []
    const enhancers = []

    if(__DEV__) {
        middleware.push(logger)
    }

    middleware.push(thunk)

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
