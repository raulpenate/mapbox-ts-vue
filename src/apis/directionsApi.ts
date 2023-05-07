import axios from 'axios'

const directionsApi = axios.create({
  baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
  params: {
    alternatives: false,
    geometries: 'geojson',
    overview: 'simplified',
    language: 'en',
    steps: false,
    access_token:
      'pk.eyJ1IjoicmF1bHBlbmF0ZSIsImEiOiJjbGd6cTd3dW4wbHZiM2ZxaDJpN3U3MWZ5In0.GTF_mvki3aiebL-JaOKEoQ',
  },
})

export default directionsApi