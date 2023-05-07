import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = 'pk.eyJ1IjoicmF1bHBlbmF0ZSIsImEiOiJjbGd6cTd3dW4wbHZiM2ZxaDJpN3U3MWZ5In0.GTF_mvki3aiebL-JaOKEoQ';

if (!navigator.geolocation) {
  alert('Your navigator does not support GeoLocalication')
  throw new Error('Your navigator does not support GeoLocalication')
}

createApp(App).use(store).use(router).mount('#app')
