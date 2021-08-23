<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-lg-6 my-3 text-center">
        <img
          v-if="book.image"
          :src="imageUrl"
          class="book-shadow w-50"
          alt=""
        />
        <img v-else src="../assets/book-mock.png" class="w-50" alt="" />
      </div>
      <div class="col-lg-6 bg-light my-3 p-md-4 p-2 col-rounded-corners">
        <h1>{{ book.name }}</h1>
        <h3>{{ book.author }}</h3>
        <h3>{{ book.publication }}</h3>
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, in.
        Soluta, tenetur dolore? Labore deleniti id totam beatae dolor voluptate
        quos, provident quas amet. Laudantium assumenda fugit accusantium saepe
        deleniti.
      </p>
      </div>
    </div>
    <div class="row mb-5">
      <div class="col text-end">
        <router-link
          :to="`/books/${book._id}/edit`"
          class="btn button-brown m-1"
          >Upravit</router-link
        >
        <button class="btn btn-outline-danger m-1" v-on:click="deleteBook">
          Smazat
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";
import toasterNotificationMixin from "../mixins/toasterNotificationMixin";

export default {
  name: "Book",
  mixins: [toasterNotificationMixin],
  data() {
    return {
      book: {},
    };
  },
  created() {
    api
      .getBook(this.$route.params.book)
      .then((response) => (this.book = response.data));
  },
  computed: {
    imageUrl() {
      return api.getImageUrl(this.$route.params.book);
    },
  },
  methods: {
    deleteBook() {
      api
        .deleteBook(this.book._id)
        .then(() => this.$router.push("/"))
        .catch(() => this.showErrorNotification("Knihu nelze smazat"));
    },
  },
};
</script>
<style>
.book-shadow {
  box-shadow: 20px -10px 10px #e8cca1;
}
</style>