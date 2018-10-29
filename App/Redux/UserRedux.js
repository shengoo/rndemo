export const actionTypes = {
    USER_ACTION: 'USER_ACTION'
}

const initialState = {}

export function userAction() {
    return {
        type: actionTypes.USER_ACTION
    }
}

export function userReducer(state = initialState, action) {
    return state
}