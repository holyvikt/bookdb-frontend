import { createRouter, createWebHashHistory } from 'vue-router'
import Books from '../views/Books.vue'
import Book from '../views/Book.vue'
import CreateBook from '../views/CreateBook.vue'
import EditBook from '../views/EditBook.vue'

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
  },
  {
    path: '/books/create',
    name: 'CreateBook',
    component: CreateBook
  },
  {
    path: '/books/:book/edit',
    name: 'EditBook',
    component: EditBook
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
