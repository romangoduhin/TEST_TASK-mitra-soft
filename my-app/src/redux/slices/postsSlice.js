import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  error: null,
}

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    getPostsRequest: (state) => {
      state.posts = []
      state.isLoading = true
      state.error = null
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload
      state.isLoading = false
      state.error = null
    },
    getPostsFailed: (state, action) => {
      //@todo check it
      state.posts = []
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {getPostsRequest, getPostsSuccess, getPostsFailed} = postsSlice.actions;
export default postsSlice.reducer;