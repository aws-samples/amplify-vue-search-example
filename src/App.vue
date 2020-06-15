<template>
  <div id="app">
    <v-app>
      <div v-if="signedIn">
        <Home />
      </div>
      <div v-else>
        <v-container class="mt-4" center>
          <v-row justify="center">
            <amplify-authenticator />
          </v-row>
        </v-container>
      </div>
    </v-app>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";
import Home from "./views/Home";
export default {
  data: () => ({
    signedIn: false,
    username: ""
  }),
  components: {
    Home
  },
  async beforeCreate() {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      this.signedIn = true;
      this.username = cognitoUser.username;
    } catch (err) {
      this.signedIn = false;
    }
    AmplifyEventBus.$on("authState", async info => {
      if (info === "signedIn") {
        let cognitoUser = await Auth.currentAuthenticatedUser();
        this.signedIn = true;
        this.username = cognitoUser.username;
      } else {
        this.signedIn = false;
      }
    });
  }
};
</script>
