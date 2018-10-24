import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'


const { Types, Creators } = createActions({
    userRequest: ['lastUserId'],
    userSuccess: ['users'],
    userFailure: null
})

export const GithubTypes = Types
export default Creators


export const INITIAL_STATE = Immutable({
    users: null
})


export const GithubSelectors = {
    selectAvatar: state => state.github.avatar
}


// request the avatar for a user
export const request = (state, { lastUserId = state.users ? state.users[state.users.length - 1 ].id : 0 }) =>
    state.merge({ fetching: true,  })

export const success = (state, action) => {
    let { users } = action
    if(state.users){
        users = state.users.concat(users)
    }
    return state.merge({ fetching: false, error: null, users })
}

// failed to get the avatar
export const failure = (state) =>
    state.merge({ fetching: false, error: true, })

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
    [Types.USER_REQUEST]: request,
    [Types.USER_SUCCESS]: success,
    [Types.USER_FAILURE]: failure
})
