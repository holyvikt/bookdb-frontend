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
        v-for="book in filteredBooks"
        :key="book._id"
      >
        <BookCard :book="book" />
      </div>
    </div>
    <div class="row" v-else>
      <div class="col text-center">
        <h2>Žádný záznam :-(</h2>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
import BookCard from "../components/BookCard.vue";

export default {
  name: "Books",
  components: { BookCard },
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
    filteredBooks() {
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
      return this.filteredBooks.some(() => true);
    },
  },
};
</script>

<style>
#search-field {
  border: solid 2px #d9aa63;
}
.book-icon {
  height: 200px;
}
</style>
