<template>
  <v-container class="mt-4" center>
    <v-row justify="center">
      <v-col cols="8">
        <graphqlSearchForm @search="search" />
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
import API, { graphqlOperation } from "@aws-amplify/api";
import { listBooks } from "@/graphql/queries";
import GraphqlSearchForm from "@/components/GraphqlSearchForm";
import SearchResult from "@/components/SearchResult";

export default {
  components: {
    GraphqlSearchForm,
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
      const graphqlInput = this.createGraphQLParam(form);
      console.log(graphqlInput);
      this.result = [];
      API.graphql(graphqlOperation(listBooks, graphqlInput))
        .then(result => {
          this.result = result.data.listBooks.items;
        })
        .catch(e => {
          console.log(e);
        })
        .finally(() => {
          this.loading = false;
        });
    },

    createGraphQLParam: form => {
      let params = {};
      Object.keys(form).map(k => {
        if (!form[k]) return;
        const condition = k === "price" ? "eq" : "contains";
        params = {
          ...params,
          ...{
            [k]: {
              [condition]: form[k]
            }
          }
        };
      });

      return Object.keys(params).length
        ? {
            filter: {
              and: params
            }
          }
        : {};
    }
  }
};
</script>
