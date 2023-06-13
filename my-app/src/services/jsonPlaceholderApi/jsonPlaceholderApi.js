import axios from "axios";
import {delayCallback} from "@utils/helpers/delayCallback.js";

const BASE_URL = "https://jsonplaceholder.typicode.com/"

const instance = axios.create({
  baseURL: BASE_URL,
});

export const jsonPlaceholderApi = {
  getPosts: async () => {
    try {
      const response = await delayCallback(() => instance.get(`/posts`), 500)

      return response.data;
    } catch (err) {
      //@todo show Alert on it
      console.log('Error', err)
    }
  },
  getComments: async (postId) => {
    try {
      const response = await delayCallback(() => instance.get(`/posts/${postId}/comments`), 500)

      return response.data;
    } catch (err) {
      //@todo show Alert on it
      console.log('Error', err)
    }
  }
}
