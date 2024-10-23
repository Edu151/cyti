import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { Quasar, Notify } from 'quasar';
import 'quasar/dist/quasar.css'; // Import Quasar CSS

Vue.use(Quasar, {
  plugins: {
    Notify
  }
});

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
