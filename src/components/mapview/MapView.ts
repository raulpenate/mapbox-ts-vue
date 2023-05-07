import { usePlacesStore, useMapStore } from '@/composables'
import mapboxgl from 'mapbox-gl'
import { defineComponent, onMounted, ref, watch } from 'vue'

export default defineComponent({
  name: 'MapView',

  setup() {
    const mapElement = ref<HTMLDivElement>()
    const { isLoading, userLocation, isUserLocationReady } = usePlacesStore()
    const { setMap } = useMapStore();

    const initMap = async () => {
      if (!mapElement.value) return new Error('Dev element dont exist')
      if (!userLocation.value) return new Error('User location dont exist')

      await Promise.resolve()

      const map = new mapboxgl.Map({
        container: mapElement.value, // container ID
        style: 'mapbox://styles/mapbox/streets-v12', // style URL
        center: userLocation.value, // starting position [lng, lat]
        zoom: 14, // starting zoom
      })

      const myLocationPopup = new mapboxgl.Popup().setLngLat(userLocation.value)
        .setHTML(`
          <h4>You're here!</4>
          <p>👋👋👋👋</p>
        `)

      const myLocationMarker = new mapboxgl.Marker()
        .setLngLat(userLocation.value)
        .setPopup(myLocationPopup)
        .addTo(map)

      //stablish map
      setMap( map )
    }

    onMounted(() => {
      if (isUserLocationReady.value) return initMap()

      console.log('I dont have localization')
    })

    watch(isUserLocationReady, (newVal) => {
      if (isUserLocationReady.value) initMap()
    })

    return {
      isLoading,
      userLocation,
      isUserLocationReady,
      mapElement,
    }
  },
})
