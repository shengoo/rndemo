import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'

export const reducers = combineReducers({
    github: require('./GithubRedux').reducer,
    posts: require('./PostsRedux').postReducer,
    user: require('./UserRedux').reducer,
})

export default () => {
    let { store, sagasManager, sagaMiddleware } = configureStore(reducers, rootSaga)

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./').reducers
            store.replaceReducer(nextRootReducer)

            const newYieldedSagas = require('../Sagas').default
            sagasManager.cancel()
            sagasManager.done.then(() => {
                sagasManager = sagaMiddleware.run(newYieldedSagas)
            })
        })
    }

    return store
}
