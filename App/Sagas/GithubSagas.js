import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import GithubActions from '../Redux/GithubRedux'

export function * getUsers (api, action) {
  const { lastUserId } = action
  // make the call to the api
  const response = yield call(api.getUser, lastUserId)

  if (response.ok) {
    // const firstUser = path(['data', 'items'], response)[0]
    // const avatar = firstUser.avatar_url
      const users = path(['data'], response)
    // do data conversion here if needed
    yield put(GithubActions.userSuccess(users))
  } else {
    yield put(GithubActions.userFailure())
  }
}
