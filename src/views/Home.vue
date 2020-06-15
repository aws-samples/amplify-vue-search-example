<template>
  <div>
    <v-navigation-drawer app dark clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Search Books App</v-list-item-title>
          <v-list-item-subtitle>REST or GraphQL</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list-group no-action>
        <template v-slot:activator>
          <v-list-item-title>REST</v-list-item-title>
        </template>
        <v-list dense nav>
          <v-list-item v-for="([icon, title, link], i) in restItems" :key="i" :to="link">
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list-group>
      <v-list-group>
        <template v-slot:activator>
          <v-list-item-title>GraphQL</v-list-item-title>
        </template>
        <v-list dense nav>
          <v-list-item v-for="([icon, title, link], i) in graphqlItems" :key="i" :to="link">
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-list-group>
      <template v-slot:append>
        <div class="pa-4" @click="logout">
          <v-btn block>Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar dark app clipped-left>
      <v-toolbar-title>
        <router-link to="/" class="toolbar_title">Amplify Data Search Sample</router-link>
      </v-toolbar-title>
    </v-app-bar>
    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script>
import { Auth } from "aws-amplify";
import { AmplifyEventBus } from "aws-amplify-vue";

export default {
  data: () => {
    return {
      restItems: [
        ["mdi-book-open", "REST Register", "/rest/register"],
        ["mdi-magnify", "REST Search", "/rest/search"]
      ],
      graphqlItems: [
        ["mdi-book-open", "GraphQL Register", "/graphql/register"],
        ["mdi-magnify", "GraphQL Search", "/graphql/search"]
      ]
    };
  },
  methods: {
    logout() {
      Auth.signOut().then(() => {
        return AmplifyEventBus.$emit("authState", "signedOut");
      });
    }
  }
};
</script>
<style scoped>
.toolbar_title {
  color: #c4c4c4;
  text-decoration: none;
}
</style>
