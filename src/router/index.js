import Vue from 'vue';
import VueRouter from 'vue-router';
import RestRegister from '../views/RestRegister';
import RestSearch from '../views/RestSearch';
import GraphqlRegister from '../views/GraphqlRegister';
import GraphqlSearch from '../views/GraphqlSearch';
import Welcome from '../views/Welcome';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },
  {
    path: '/rest/register',
    name: 'RestRegister',
    component: RestRegister
  },
  {
    path: '/rest/search',
    name: 'RestSearch',
    component: RestSearch
  },
  {
    path: '/graphql/register',
    name: 'GraphqlRegister',
    component: GraphqlRegister
  },
  {
    path: '/graphql/search',
    name: 'GraphqlSearch',
    component: GraphqlSearch
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
