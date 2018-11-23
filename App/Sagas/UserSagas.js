import {call, put} from 'redux-saga/effects'
import UserAction from '../Redux/UserRedux'

export function* loginSuccess(action) {
     put(UserAction.loginSuccess(action.user))
}

export function* logout() {
    put(UserAction.logout())
}