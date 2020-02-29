import axios from 'axios'

export default {
  fetchPosts () {
    return axios
      .get('https://jsonplaceholder.typicode.com/tests')
      .then(response => response.data)
  },
  fetchSpecimentType () {
    return axios
      .get('https://jsonplaceholder.typicode.com/specimenttypes')
      .then(response => response.data)
  }
}