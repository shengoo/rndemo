import { createReducer, createActions } from 'reduxsauce' // https://github.com/infinitered/reduxsauce
import Immutable from 'seamless-immutable' // https://github.com/rtfeldman/seamless-immutable


const { Types, Creators } = createActions({
    userRequest: ['lastUserId'],
    userSuccess: ['users'],
    userFailure: ['error'],
    refreshRequest: ['request'],
    refreshSuccess: ['users'],
    refreshFailure: ['error'],
    fetchMoreRequest: ['lastUserId'],
    fetchMoreSuccess: ['users'],
    fetchMoreFailure: ['error'],

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

export const refreshRequest = (state, action) => state.merge({fetching: false, refreshing: true, error: null})

export const refreshSuccess = (state, action) => {
    const { users } = action
    return state.merge({ fetching: false, error: null, users, refreshing: false })
}

export const refreshFailure = (state, action) => state.merge({refreshing: false, error: true})

export const fetchMoreRequest = (state, action) => state.merge({fetchingMore: true})

export const fetchMoreSuccess = (state, action) => {
    let { users } = action
    if(state.users){
        users = state.users.concat(users)
    }
    return state.merge({ fetchingMore: false, error: null, users })
}

export const fetchMoreFailure = (state) =>
    state.merge({ fetchingMore: false, })


/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_REQUEST]: request,
    [Types.USER_SUCCESS]: success,
    [Types.USER_FAILURE]: failure,

    [Types.REFRESH_REQUEST]: refreshRequest,
    [Types.REFRESH_SUCCESS]: refreshSuccess,
    [Types.REFRESH_FAILURE]: refreshFailure,

    [Types.FETCH_MORE_REQUEST]: fetchMoreRequest,
    [Types.FETCH_MORE_SUCCESS]: fetchMoreSuccess,
    [Types.FETCH_MORE_FAILURE]: fetchMoreFailure,

})
