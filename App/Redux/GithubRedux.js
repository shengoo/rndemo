import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


const { Types, Creators } = createActions({
    userRequest: ['lastUserId'],
    userSuccess: ['users'],
    userFailure: ['error'],
    // refreshRequest: ['request'],
    // refreshSuccess: ['users'],
    // refreshFailure: ['error']
})

export const GithubTypes = Types
export default Creators


export const INITIAL_STATE = Immutable({
    users: null
})


export const request = (state) =>
    state.merge({ fetching: true,  })

export const success = (state, action) => {
    let { users } = action
    if(state.users){
        users = state.users.concat(users)
    }
    return state.merge({ fetching: false, error: null, users })
}

export const failure = (state) =>
    state.merge({ fetching: false, error: true, })

export const refreshRequest = (state, action) => state.merge({fetching: false, users: null, refreshing: true, error: null})

export const refreshSuccess = (state, action) => {
    let { users } = action
    return state.merge({ fetching: false, error: null, users, refreshing: false })
}

export const refreshFailure = (state, action) => state.merge({refreshing: false, error: true})


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_REQUEST]: request,
    [Types.USER_SUCCESS]: success,
    [Types.USER_FAILURE]: failure,

    // [Types.REFRESH_USER_REQUEST]: refreshRequest,
    // [Types.REFRESH_USER_SUCCESS]: refreshSuccess,
    // [Types.REFRESH_USER_FAILURE]: refreshFailure,

})
