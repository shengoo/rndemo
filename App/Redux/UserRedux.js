import {AsyncStorage} from "react-native";
import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import Constants from "../Utils/Constants";


const { Types, Creators } = createActions({
    // loginRequest: ['username', 'password'],
    loginSuccess: ['user'],
    logout: null,
    // loginFailure: ['error'],
    // logoutRequest: null,
    // logoutSuccess: null,
    // logoutFailure: null,
})

export const UserActionTypes = Types
export default Creators

export const INITIAL_STATE = Immutable({
    loggedIn: false
})

export const loginSuccess = (state, action) => {
    const result = state.merge({loggedIn: true, info: action.user})
    AsyncStorage.setItem(Constants.STORAGE_KEY_USER_INFO,JSON.stringify(result));
    return result
}

export const logout = (state, action) => {
    const result = state.merge({loggedIn: false, info: null});
    AsyncStorage.setItem(Constants.STORAGE_KEY_USER_INFO,JSON.stringify(result));
    return result
}


export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_SUCCESS]: loginSuccess,
    [Types.LOGOUT]: logout,
})