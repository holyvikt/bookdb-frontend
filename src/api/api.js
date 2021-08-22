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
  },
  postBook(formData){
    return axios.post(`${config.apiUrl}/books`, formData)
  },
  putBook(bookId, formData){
    return axios.put(`${config.apiUrl}/books/${bookId}`, formData)
  }
}

export default api
