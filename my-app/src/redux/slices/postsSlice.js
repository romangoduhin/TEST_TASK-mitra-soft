import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  isLoading: false,
  errorMessage: null,
}

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    getPostsRequest: (state) => {
      state.posts = []
      state.isLoading = true
      state.errorMessage = null
    },
    getPostsSuccess: (state, action) => {
      state.posts = action.payload
      state.isLoading = false
      state.errorMessage = null
    },
    getPostsFailed: (state, action) => {
      state.posts = []
      state.isLoading = false
      state.errorMessage = action.payload.message
    },
  },
})

export const {getPostsRequest, getPostsSuccess, getPostsFailed} = postsSlice.actions;
export default postsSlice.reducer;