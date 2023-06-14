import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  profile: null,
  posts: [],
  isLoading: false,
  errorMessage: null,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    getProfileRequest: (state) => {
      state.profile = null
      state.posts = []
      state.isLoading = true
      state.errorMessage = null
    },
    getProfileSuccess: (state, action) => {
      state.profile = action.payload.profile
      state.posts = action.payload.posts
      state.isLoading = false
      state.errorMessage = null
    },
    getProfileFailed: (state, action) => {
      state.profile = null
      state.posts = []
      state.isLoading = false
      state.errorMessage = action.payload.message
    },
  },
})

export const {getProfileRequest, getProfileSuccess, getProfileFailed} = profileSlice.actions;
export default profileSlice.reducer;