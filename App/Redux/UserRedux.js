import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


const { Types, Creators } = createActions({
    // loginRequest: ['username', 'password'],
    loginSuccess: ['user'],
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
    console.log('loginSuccess')
    return state.merge({loggedIn: true, info: action.user})
}

export const logout = (state, action) => {
    return state.merge({loggedIn: false, info: null})
}


export const reducer = createReducer(INITIAL_STATE, {
    [Types.LOGIN_SUCCESS]: loginSuccess,
})