import {takeLatest, all} from 'redux-saga/effects'
import API from '../Services/Api'

import {GithubTypes} from '../Redux/GithubRedux'
import {getUsers, refreshUsers} from './GithubSagas'

import {UserActionTypes} from "../Redux/UserRedux";
import {loginSuccess} from './UserSagas'

const api = API.create();

// console.log(GithubTypes.USER_REQUEST)
// console.log(UserActionTypes.LOGIN_SUCCESS)

// console.log(getUsers)
// console.log(loginSuccess)

export default function* root() {
    yield all([
        takeLatest(GithubTypes.USER_REQUEST, getUsers, api),
        takeLatest(GithubTypes.REFRESH_REQUEST, refreshUsers, api),
        takeLatest(GithubTypes.FETCH_MORE_REQUEST, getUsers, api),
        takeLatest(UserActionTypes.LOGIN_SUCCESS, loginSuccess),
    ])
}