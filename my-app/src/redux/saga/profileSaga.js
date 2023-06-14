import {jsonPlaceholderApi} from "@services";
import {put} from 'redux-saga/effects'
import {getProfileFailed, getProfileRequest, getProfileSuccess} from "@redux/slices/profileSlice.js";

export function* getProfileSaga({payload}) {
  try {
    yield put(getProfileRequest())

    const profile = yield jsonPlaceholderApi.getProfile(payload)

    const userId = yield profile.id

    const posts = yield jsonPlaceholderApi.getPostsByUserId(userId)

    yield put(getProfileSuccess({profile, posts}))
  } catch (err) {
    yield put(getProfileFailed(err))
  }
}