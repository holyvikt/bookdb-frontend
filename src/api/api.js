import axios from 'axios'
import config from '../config'

const api = {
  getBooks() {
    return axios.get(`${config.apiUrl}/books`)
  },
  getBook(bookId) {
    return axios.get(`${config.apiUrl}/books/${bookId}`)
  },
  getImageUrl(bookId) {
    return `${config.apiUrl}/books/${bookId}/image`;
  },
  deleteBook(bookId) {
    return axios.delete(`${config.apiUrl}/books/${bookId}`)
  }
}

export default api
