import React, {Component} from 'react'

import RootContainer from "./RootContainer";
import { Provider } from 'react-redux'
import createStore from '../Redux'

const store = createStore()

console.log(store.getState())

class App extends Component {
    render () {
        return (
            <Provider store={store}>
                <RootContainer />
            </Provider>
        )
    }
}

export default App