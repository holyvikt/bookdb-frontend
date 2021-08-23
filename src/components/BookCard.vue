<template>
    <div class="card w-100 text-center">
          <div class="card-body">
            <img
              v-if="book.image !== ''"
              :src="imageUrl"
              class="book-icon"
              alt=""
            />
            <img
              v-else
              src="../assets/book-mock.png"
              class="book-icon"
              alt=""
            />
            <h3 class="card-title mt-4">{{ book.name }}</h3>
            <p>{{ book.author }}</p>
            <p>{{ book.publication }}</p>
            <router-link :to="{name: 'Book', params: {book: book._id}}" class="btn button-brown"
              >Zobrazit</router-link
            >
          </div>
        </div>
</template>

<script>
import api from '../api/api'

export default {
    name: 'BookCard',
    props: {
        book: Object
    },
    data() {
        return {
            imageUrl: api.getImageUrl(this.book._id)
        }
    },
    watch: {
        book: function(newBook, _oldVal){
            this.imageUrl = this.imageUrl(newBook._id)
        }
    }
}
</script>