import React, {Component} from 'react'
import {AsyncStorage} from 'react-native'

import RootContainer from "./RootContainer";
import { Provider } from 'react-redux'
import createStore from '../Redux'
import Constants from "../Utils/Constants";

const store = createStore()


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