import Vue from 'vue';
import App from './App.vue';
import HiglightJS from 'highlight.js';
 
Vue.use(HiglightJS.vuePlugin);
Vue.config.productionTip = false;

// Allow regular expressions to be stringified!
RegExp.prototype.toJSON = RegExp.prototype.toString;

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app');
