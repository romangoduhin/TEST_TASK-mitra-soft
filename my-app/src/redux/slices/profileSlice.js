import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  posts: [],
  isLoading: false,
  error: null,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileRequest: (state) => {
      state.profile = null
      state.posts = []
      state.isLoading = true
      state.error = null
    },
    getProfileSuccess: (state, action) => {
      state.profile = action.payload.profile
      state.posts = action.payload.posts
      state.isLoading = false
      state.error = null
    },
    getProfileFailed: (state, action) => {
      //@todo check it
      state.profile = null
      state.posts = []
      state.isLoading = false
      state.error = action.payload
    },
  },
})

export const {getProfileRequest, getProfileSuccess, getProfileFailed} = profileSlice.actions;
export default profileSlice.reducer;