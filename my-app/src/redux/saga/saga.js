import {takeEvery} from 'redux-saga/effects'
import {getPostsSaga} from "@redux/saga/postsSaga.js";
import {sagaActions} from "@redux/saga/sagaActions.js";

export default function* rootSaga() {
  yield takeEvery(sagaActions.GET_POSTS, getPostsSaga)
}