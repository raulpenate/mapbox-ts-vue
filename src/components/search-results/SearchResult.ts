import { defineComponent, ref, watch } from 'vue'
import { useMapStore, usePlacesStore } from '@/composables'
import { Feature } from '@/interfaces/places'

export default defineComponent({
  name: 'SearchResult',

  setup() {
    const { places, isLoadingPlaces, userLocation } = usePlacesStore()
    const { map, setPlaceMarkers, getRouteBetweenPoints } = useMapStore()
    const activePlace = ref('')

    watch(places, (newPlaces) => {
      activePlace.value = ''
      setPlaceMarkers(newPlaces)
    })

    return {
      places,
      isLoadingPlaces,
      activePlace,

      onPlaceClicked: (place: Feature) => {
        activePlace.value = place.id
        if (!userLocation.value) return

        const [lng, lat] = place.center

        const [startLng, startLat] = userLocation.value

        const start: [number, number] = [startLng, startLat]
        const end: [number, number] = [lng, lat]

        getRouteBetweenPoints(start, end)

        map.value?.flyTo({
          center: [lng, lat],
          zoom: 14,
        })
      },
    }
  },
})
