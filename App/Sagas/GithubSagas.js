import {call, put} from 'redux-saga/effects'
import {path} from 'ramda'
import GithubActions from '../Redux/GithubRedux'
console.log(GithubActions)

export function* getUsers(api, action) {
    const {lastUserId} = action
    const response = yield call(api.getUser, lastUserId)

    if (response.ok) {
        const users = path(['data'], response)
        yield put(GithubActions.userSuccess(users))
    } else {
        yield put(GithubActions.userFailure())
    }
}

export function* refreshUsers(api, action) {
    const response = yield call(api.getUser)

    if (response.ok) {
        const users = path(['data'], response)
        yield put(GithubActions.refreshSuccess(users))
    } else {
        yield put(GithubActions.refreshFailure())
    }
}