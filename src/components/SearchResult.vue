<template>
  <v-container>
    <v-progress-linear
      color="deep-purple accent-4"
      indeterminate
      :active="loading"
      rounded
      height="6"
    ></v-progress-linear>
    <v-data-table :headers="headers" :items="this.result" :items-per-page="5" class="elevation-1"></v-data-table>
  </v-container>
</template>

<script>
export default {
  props: {
    result: Array,
    loading: Boolean
  },
  data() {
    return {
      headers: [
        { text: "Title", value: "title" },
        { text: "Author", value: "author" },
        { text: "Price", value: "price" },
        { text: "Release date", value: "releaseDate" },
        { text: "Description", value: "description" }
      ]
    };
  }
};
</script>