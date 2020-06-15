<template>
  <v-container class="mt-4">
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
import { API } from "aws-amplify";
import RegisterForm from "../components/RegisterForm";
export default {
  components: {
    RegisterForm
  },
  data: () => ({
    snackbar: false,
    snackbarText: ""
  }),
  methods: {
    submit: function(form) {
      const param = {
        headers: {},
        response: true,
        body: {
          title: form.title,
          author: form.author,
          price: form.price,
          description: form.description,
          releaseDate: form.releaseDate
        }
      };
      API.put("booksearchrest", "/book", param)
        .then(() => {
          this.snackbar = true;
          this.snackbarText = "success to register book!";
        })
        .catch(e => {
          this.snackbar = true;
          this.snackbarText = e.message;
        });
    }
  }
};
</script>
