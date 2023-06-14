import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'
import postsReducer from './slices/postsSlice.js'
import profileReducer from './slices/profileSlice.js'
import rootSaga from "@redux/saga/saga.js";

const sagaMiddleware = createSagaMiddleware()

export const store = configureStore({
  devTools: true,
  reducer: {
    posts: postsReducer,
    profile: profileReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: false}).concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)