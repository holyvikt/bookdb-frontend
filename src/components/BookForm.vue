<template>
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
        <label for="publication-field" class="form-label">Rok vydání</label>
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
</template>

<script>
import toasterNotificationMixin from "../mixins/toasterNotificationMixin";

export default {
  name: "BookForm",
  props: {
    bookProp: Object,
    saveCallback: Function,
  },
  mixins: [toasterNotificationMixin],
  data() {
    return {
      book: { ...this.bookProp },
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
      this.saveCallback(formData);
    },
  },
  watch: {
    bookProp: function (newVal, oldVal) {
      this.book = newVal;
    },
  },
};
</script>
