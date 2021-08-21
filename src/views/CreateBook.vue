<template>
  <div class="container">
    <div class="row py-5">
      <div class="col bg-light p-md-4 p-2 col-rounded-corners">
        <h1>Nová kniha</h1>
        <form enctype="multipart/form-data" @submit.prevent="submitForm">
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="book-field" class="form-label">Název knihy</label>
              <input
                type="text"
                v-model="book.name"
                id="book-field"
                class="form-control"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="author-field" class="form-label">Autor</label>
              <input
                type="text"
                v-model="book.author"
                id="author-field"
                class="form-control"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="publication-field" class="form-label"
                >Rok vydání</label
              >
              <input
                type="number"
                v-model="book.publication"
                id="publication-field"
                class="form-control"
              />
            </div>
            <div class="col-md-6 mb-3">
              <label for="image-field" class="form-label">Obrázek obalu</label>
              <input
                class="form-control"
                type="file"
                id="image-field"
                ref="file"
                v-on:change="selectFile"
              />
            </div>
            <div class="col-md-6 mb-3">
              <button type="submit" class="btn button-brown">Uložit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
import toaster from '../mixins/toasterNotificationMixin'

export default {
  name: "CreateBook",
  mixins: [toaster],
  data() {
    return {
      book: {
        name: "",
        author: "",
        publication: NaN,
      },
      file: null,
    };
  },
  methods: {
    selectFile() {
      this.file = this.$refs.file.files[0];
    },
    submitForm() {
      var formData = new FormData();
      formData.append("file", this.file);
      formData.append("name", this.book.name);
      formData.append("author", this.book.author);
      formData.append("publication", this.book.publication);
      axios
        .post("http://localhost:5000/api/v1/books", formData)
        .then((response) => {
          this.file = null
          this.$router.push({name: 'Book', params: {book: response.data._id}})
        })
        .catch(() => this.showErrorNotification("Knihu se nepodařilo vložit"))
    },
  },
};
</script>