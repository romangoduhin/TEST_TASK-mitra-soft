import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/"

const instance = axios.create({
  baseURL: BASE_URL,
});

export const jsonPlaceholderApi = {
  getPosts: async () => {
    try {
      const response = await instance.get(`/posts`)

      return response.data;
    } catch (err) {
      //@todo show Alert on it
      console.log('Error', err)
    }
  },
  getComments: async (postId) => {
    try {
      const response = await instance.get(`/posts/${postId}/comments`)

      return response.data;
    } catch (err) {
      //@todo show Alert on it
      console.log('Error', err)
    }
  }
}
