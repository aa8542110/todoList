// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-m-button/dist/css/default.css';
import VueSweetAlert from 'vue-sweetalert';
import VueResource from 'vue-resource';
import 'element-ui/lib/theme-chalk/index.css';
import MButton from 'vue-m-button';
import ElementUI from 'element-ui';
import VueClip from 'vue-clip';
import Vue from 'vue';
import App from './App';
import router from './router';


Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(MButton);
Vue.use(VueSweetAlert);
Vue.use(VueClip);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
