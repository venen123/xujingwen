import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
import Print from 'vue-print-nb'
Vue.use(Print);
Vue.use(ViewUI);
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
