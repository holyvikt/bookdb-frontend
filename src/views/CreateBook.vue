<template>
  <div class="container">
    <div class="row py-5">
      <div class="col bg-light p-md-4 p-2 col-rounded-corners">
        <h1>Nová kniha</h1>
        <BookForm :bookProp="book" :saveCallback="saveCallback" />
      </div>
    </div>
  </div>
</template>


<script>
import BookForm from "../components/BookForm.vue";
import api from "../api/api";
import toasterNotificationMixin from '../mixins/toasterNotificationMixin';

export default {
  name: "BookEditor",
  components: { BookForm },
  mixins: [toasterNotificationMixin],
  data() {
    return {
      book: {
        name: "",
        author: "",
        publication: NaN,
      },
      saveCallback: (formData) => {
        api
          .postBook(formData)
          .then((response) => {
            this.file = null;
            this.$router.push({
              name: "Book",
              params: { book: response.data._id },
            });
          })
          .catch(() =>
            this.showErrorNotification("Knihu se nepodařilo vložit")
          );
      },
    };
  },
};
</script>