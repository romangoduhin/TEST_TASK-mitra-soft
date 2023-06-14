import axios from "axios";
import {delayCallback} from "@helpers";

const BASE_URL = "https://jsonplaceholder.typicode.com/"

const instance = axios.create({
  baseURL: BASE_URL,
});

export const jsonPlaceholderApi = {
  getPosts: async () => {
    const response = await delayCallback(() => instance.get(`/posts`), 500)

    return response.data;
  },
  getComments: async (postId) => {
    const response = await delayCallback(() => instance.get(`/posts/${postId}/comments`), 500)

    return response.data;
  },
  getPostsByUserId: async (userId) => {
    const response = await delayCallback(() => instance.get(`/users/${userId}/posts`), 500)

    return response.data;
  },
  getProfile: async (userId) => {
    const response = await delayCallback(() => instance.get(`/users/${userId}`), 500)

    return response.data;
  }
}
