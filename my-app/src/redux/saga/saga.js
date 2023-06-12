import {takeEvery} from 'redux-saga/effects'
import {getPostsSaga} from "@redux/saga/postsSaga.js";
import {getPostsSagaAction} from "@redux/saga/sagaActions.js";

export default function* rootSaga() {
  yield takeEvery(getPostsSagaAction, getPostsSaga)
}