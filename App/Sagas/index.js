import { takeLatest, all } from 'redux-saga/effects'
import API from '../Services/Api'

import { GithubTypes } from '../Redux/GithubRedux'
import {getUsers} from './GithubSagas'

const api = API.create()

export default function * root () {
    yield all([
        // some sagas receive extra parameters in addition to an action
        takeLatest(GithubTypes.USER_REQUEST, getUsers, api),
        // takeLatest(GithubTypes.REFRESH_USER_REQUEST, getUsers, api),
    ])
}