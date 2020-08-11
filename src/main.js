import Vue from 'vue'
import App from './App.vue'
require('./assets/sass/app.scss');
import store from '../src/store/theme';
Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
  store,
}).$mount('#app');
