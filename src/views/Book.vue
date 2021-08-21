<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-6">
                
            </div>
            <div class="col-lg-6">
                <h1>{{ book.name }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
import api from '../api/api'

export default {
  name: "Book",
  data() {
    return {
      book: {}
    };
  },
  created(){
      api.getBook(this.$route.params.book).then(response => (this.book = response.data))
  }
};
</script>