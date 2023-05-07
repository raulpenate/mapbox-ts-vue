import axios from 'axios'

const searchApi = axios.create({
  baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
  params: {
    limit: 5,
    access_token:
      'pk.eyJ1IjoicmF1bHBlbmF0ZSIsImEiOiJjbGd6cTd3dW4wbHZiM2ZxaDJpN3U3MWZ5In0.GTF_mvki3aiebL-JaOKEoQ',
  },
})

export default searchApi
