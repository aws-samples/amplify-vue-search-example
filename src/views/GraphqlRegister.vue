<template>
  <v-container class="mt-4" center>
    <v-row justify="center">
      <v-col cols="8">
        <RegisterForm @submit="submit" />
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
import { createBook } from "@/graphql/mutations";
import RegisterForm from "../components/RegisterForm";

export default {
  components: {
    RegisterForm
  },
  data: () => ({
    snackbar: false,
    snackbarText: "",
    result: []
  }),
  methods: {
    submit: function(form) {
      API.graphql(
        graphqlOperation(createBook, {
          input: {
            title: form.title,
            author: form.author,
            price: form.price,
            description: form.description,
            releaseDate: form.releaseDate
          }
        })
      )
        .then(() => {
          this.snackbar = true;
          this.snackbarText = "Succeeded to register the book! ";
        })
        .catch(e => {
          this.snackbar = true;
          this.snackbarText = e.message;
        });
    }
  }
};
</script>
