import Immutable from 'seamless-immutable'

export const PostTypes = {
    FETCH_POSTS_REQUEST: 'FETCH_POSTS_REQUEST',
    FETCH_POSTS_SUCCESS: 'FETCH_POSTS_SUCCESS',
    FETCH_POSTS_FAILURE: 'FETCH_POSTS_FAILURE',

    REFRESH_POSTS_REQUEST: 'REFRESH_POSTS_REQUEST',
    REFRESH_POSTS_SUCCESS: 'REFRESH_POSTS_SUCCESS',
    REFRESH_POSTS_FAILURE: 'REFRESH_POSTS_FAILURE',

    MORE_POSTS_REQUEST: 'MORE_POSTS_REQUEST',
    MORE_POSTS_SUCCESS: 'MORE_POSTS_SUCCESS',
    MORE_POSTS_FAILURE: 'MORE_POSTS_FAILURE',

    SELECT_POST: 'SELECT_POST',
}

const initialState = Immutable({
    posts: null,
    post: null,
    fetching: false,
})

export function fetchPosts(page = 1) {
    return dispatch => {
        dispatch({
            type: PostTypes.FETCH_POSTS_REQUEST,
        })
        fetch(`https://www.sheng00.com/wp-json/wp/v2/posts?page=${page}`)
            .then((response) => response.json())
            .then((responseJson) => {
                dispatch({
                    type: PostTypes.FETCH_POSTS_SUCCESS,
                    payload: responseJson
                })
            })
            .catch((error) => {
                dispatch({
                    type: PostTypes.FETCH_POSTS_FAILURE,
                    payload: error
                })
            });
    }
}

export function selectPost(post) {
    return  {
        type: PostTypes.SELECT_POST,
        payload: post,
    }
}

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case PostTypes.FETCH_POSTS_REQUEST:{
            return state.merge({fetching: true})
        }
        case PostTypes.FETCH_POSTS_SUCCESS: {
            return state.merge({
                fetching: false,
                posts: action.payload
            })
        }
        case PostTypes.FETCH_POSTS_FAILURE: {
            return state.merge({
                fetching: false,
                error: action.payload
            })
        }
        case PostTypes.SELECT_POST: {
            return state.merge({
                post: action.payload
            })
        }
        default:
            return state
    }
}

