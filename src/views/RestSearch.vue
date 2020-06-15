<template>
  <v-container class="mt-4" center>
    <v-row justify="center">
      <v-col cols="8">
        <restApiSearchForm @search="search" />
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="8">
        <searchResult :result="result" :loading="loading" />
      </v-col>
    </v-row>
    <div class="text-center ma-2">
      <v-snackbar v-model="snackbar">
        {{ snackbarText }}
        <v-btn color="pink" text @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </div>
  </v-container>
</template>

<script>
import { API } from "aws-amplify";
import RestApiSearchForm from "@/components/RestApiSearchForm";
import SearchResult from "@/components/SearchResult";
export default {
  components: {
    RestApiSearchForm,
    SearchResult
  },
  data: () => ({
    snackbar: false,
    snackbarText: "",
    loading: false,
    result: []
  }),
  methods: {
    search: function(form) {
      this.loading = true;
      this.result = [];
      const param = {
        headers: {},
        response: true
      };
      const path = form.releaseDate
        ? `object/${form.author}/${form.releaseDate}`
        : `${form.author}`;
      API.get("booksearchrest", `/book/${path}`, param)
        .then(result => {
          this.result = Array.isArray(result.data)
            ? (this.result = result.data)
            : [result.data];
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          this.loading = false;
        });
    }
  }
};
</script>
