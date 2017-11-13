// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuetify from 'vuetify';
import '../node_modules/vuetify/dist/vuetify.min.css';
import App from './App.vue';
import Timer from './components/Timer.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(Vuetify);

Vue.component('timer', Timer);

Vue.filter('two_digits', function (value) {
  return value.toString().padStart(2, '0');
});

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
