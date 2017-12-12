// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.css';
import VueCodeMirror from 'vue-codemirror';

import App from './App.vue';
import CodeEditor from './components/CodeEditor.vue';
import Timer from './components/Timer.vue';
import router from './router';

Vue.use(Vuetify);
Vue.use(VueCodeMirror);
Vue.component('timer', Timer);
Vue.component('codeEditor', CodeEditor);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
