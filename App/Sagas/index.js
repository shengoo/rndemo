import {takeLatest, all} from 'redux-saga/effects'
import API from '../Services/Api'

import {GithubTypes} from '../Redux/GithubRedux'
import {getUsers, refreshUsers} from './GithubSagas'

const api = API.create()

export default function* root() {
    yield all([
        takeLatest(GithubTypes.USER_REQUEST, getUsers, api),
        takeLatest(GithubTypes.REFRESH_REQUEST, refreshUsers, api),
        takeLatest(GithubTypes.FETCH_MORE_REQUEST, getUsers, api)
    ])
}