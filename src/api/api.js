import axios from 'axios'
import config from '../config'

const api = {
  getBooks () {
    return axios.get(`${config.apiUrl}/books`)
  },
  getBook (bookId) {
    return axios.get(`${config.apiUrl}/books/${bookId}`)
  }
}

export default api
