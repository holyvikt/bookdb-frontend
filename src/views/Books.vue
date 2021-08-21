<template>
  <div class="container py-4">
    <div class="row">
      <div class="col">
        <div class="form-group">
          <input
            type="text"
            class="form-control"
            id="search-field"
            placeholder="Hledání"
            v-model="bookFilter"
          />
          <small>Vyhledávat můžete podle názvu knihy nebo jména autora.</small>
        </div>
      </div>
    </div>
    <hr class="my-4" />
    <div class="row" v-if="anyResult">
      <div
        class="col-lg-3 col-md-6 col-12 d-flex align-items-stretch py-2"
        v-for="book in displayedBooks"
        :key="book._id"
      >
        <div class="card w-100 text-center">
          <div class="card-body">
            <img src="../assets/gump.webp" class="m-4 w-50" alt="">
            <hr>
            <h3 class="card-title">{{ book.name }}</h3>
            <p>{{ book.author }}</p>
            <p>{{ book.publication }}</p>
            <router-link :to="`/books/${book._id}`" class="btn button-brown"
              >Zobrazit</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-else>
      <div class="col text-center">
        <h2>Vyhledávání neodpovídá žádný záznam</h2>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  name: "Books",
  data() {
    return {
      books: [],
      bookFilter: "",
    };
  },
  created() {
    api.getBooks().then((response) => (this.books = response.data));
  },
  computed: {
    displayedBooks() {
      if (this.bookFilter) {
        return this.books.filter(
          (book) =>
            book.name.toLowerCase().includes(this.bookFilter.toLowerCase()) ||
            book.author.toLowerCase().includes(this.bookFilter.toLowerCase())
        );
      } else {
        return this.books;
      }
    },
    anyResult() {
      return this.displayedBooks.some(() => true);
    },
  },
};
</script>

<style>
#search-field {
  border: solid 2px #d9aa63;
}
</style>
