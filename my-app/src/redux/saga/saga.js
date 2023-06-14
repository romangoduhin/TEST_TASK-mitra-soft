import {takeEvery} from 'redux-saga/effects'
import {getPostsSaga} from "@redux/saga/postsSaga.js";
import {sagaActions} from "@redux/saga/sagaActions.js";
import {getProfileSaga} from "@redux/saga/profileSaga.js";

export default function* rootSaga() {
  yield takeEvery(sagaActions.GET_POSTS, getPostsSaga)
  yield takeEvery(sagaActions.GET_PROFILE, getProfileSaga)
}