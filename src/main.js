import Vue from 'vue';
import App from './App.vue';
import router from './router';
import Vuetify from 'vuetify';
import awsconfig from './aws-exports';
import Amplify, * as AmplifyModules from 'aws-amplify';
import { AmplifyPlugin } from 'aws-amplify-vue';
import vuetify from './plugins/vuetify';

Amplify.configure(awsconfig);
Vue.use(AmplifyPlugin, AmplifyModules, Vuetify);
new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
