import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { VueQueryPlugin } from '@tanstack/vue-query';
// Vuetify
import 'vuetify/styles';
import "@mdi/font/css/materialdesignicons.css";

import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue';
import router from './router';

import './assets/main.css';

const app = createApp(App);
const vuetify = createVuetify({
  components,
  directives
});

app.use(vuetify);
app.use(createPinia());
app.use(router);

/*
  Configuration of cache, for all queries,
  we will mantein the data for only one minute
*/

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        cacheTime: 1000 * 60, 
      }
    }
  }
});

app.mount('#app')
