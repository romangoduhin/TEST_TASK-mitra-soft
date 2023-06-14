import {jsonPlaceholderApi} from "@services";
import {getPostsFailed, getPostsRequest, getPostsSuccess} from "../slices/postsSlice.js";
import {put} from "redux-saga/effects";

export function* getPostsSaga() {
  try {
    yield put(getPostsRequest())

    const response = yield jsonPlaceholderApi.getPosts()

    yield put(getPostsSuccess(response))
  } catch (err) {
    yield put(getPostsFailed(err))
  }
}