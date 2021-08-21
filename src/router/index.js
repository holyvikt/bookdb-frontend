import { createRouter, createWebHashHistory } from 'vue-router'
import Books from '../views/Books.vue'
import Book from '../views/Book.vue'

const routes = [
  {
    path: '/',
    name: 'Books',
    component: Books
  },
  {
    path: '/books/:book',
    name: 'Book',
    component: Book
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
