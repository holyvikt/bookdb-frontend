<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-lg-6 my-3 text-center">
        <img :src="imageUrl" class="book-img w-50" alt="" />
      </div>
      <div class="col-lg-6 bg-light my-3 p-md-4 p-2 col-rounded-corners">
        <h1>{{ book.name }}</h1>
        <h3>{{ book.author }}</h3>
        <h3>{{ book.publication }}</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores
          totam perspiciatis quia fugiat aliquam incidunt illo obcaecati
          explicabo, eveniet beatae voluptas, eaque voluptate iusto maxime
          facilis! Similique laboriosam cum tempora!
        </p>
      </div>
    </div>
    <div class="row">
      <div class="col text-end">
        <button class="btn button-brown">Upravit</button>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api/api";

export default {
  name: "Book",
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
};
</script>

<style>
.book-img {
  box-shadow: 20px -10px 10px #e8cca1;
}
</style>