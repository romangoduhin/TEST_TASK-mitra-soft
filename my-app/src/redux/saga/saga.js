import {takeEvery} from "redux-saga/effects";
import {getPostsSaga} from "./postsSaga.js";
import {sagaActions} from "./sagaActions.js";
import {getProfileSaga} from "./profileSaga.js";

export default function* rootSaga() {
  yield takeEvery(sagaActions.GET_POSTS, getPostsSaga)
  yield takeEvery(sagaActions.GET_PROFILE, getProfileSaga)
}