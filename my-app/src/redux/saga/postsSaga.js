import {jsonPlaceholderApi} from "@services";
import {getPosts} from "@redux/slices/postsSlice.js";
import {put} from 'redux-saga/effects'

export function* getPostsSaga() {
  try {
    const payload = yield jsonPlaceholderApi.getPosts()

    yield put(getPosts(payload))


  } catch (err) {
    console.log(err)
  }
}