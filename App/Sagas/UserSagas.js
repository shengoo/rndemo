import {call, put} from 'redux-saga/effects'
import UserAction from '../Redux/UserRedux'
console.log(UserAction)

export function* loginSuccess(action) {
     put(UserAction.loginSuccess(action.user))
}
