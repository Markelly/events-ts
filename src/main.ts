import Vue from 'vue';
import App from './App.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css';
import { BootstrapVue } from 'bootstrap-vue';
import router from './router';
import Amplify from 'aws-amplify';
import 'aws-amplify-vue';
import awsconfig from './../aws-exports';

Amplify.configure(awsconfig);

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app');
