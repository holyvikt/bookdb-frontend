<template>
  <div class="container">
    <div class="row py-5">
      <div class="col bg-light p-md-4 p-2 col-rounded-corners">
        <h1>Úprava knihy</h1>
        <BookForm :bookProp="book" :saveCallback="saveCallback" />
      </div>
    </div>
  </div>
</template>


<script>
import api from "../api/api";
import BookForm from "../components/BookForm.vue";
import toasterNotificationMixin from "../mixins/toasterNotificationMixin";

export default {
  components: { BookForm },
  name: "BookEditor",
  mixins: [toasterNotificationMixin],
  data() {
    return {
      book: {},
      saveCallback: (formData) => {
          api.putBook(this.$route.params.book, formData)
          .then((response) => {
          this.file = null;
          this.showSuccessNotification('Kniha úspěšně aktualizována')
        })
        .catch(() => this.showErrorNotification("Knihu se nepodařilo aktualizovat"));
      }
    };
  },
  created() {
    api
      .getBook(this.$route.params.book)
      .then((response) => (this.book = response.data))
      .catch(() => {
        this.showErrorNotification("Nelze načíst aktuální data");
        this.book = {
          name: "",
          author: "",
          publication: NaN,
        };
      });
  },
};
</script>