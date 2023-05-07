import { MutationTree } from 'vuex'
import { PlacesState } from './state'

const mutation: MutationTree<PlacesState> = {
  setLngLat(state: PlacesState, { lng, lat }: { lng: number; lat: number }) {
    state.userLocation = [lng, lat]
    state.isLoading = false
  },
  setNewUserLocation(
    state: PlacesState,
    { lng, lat }: { lng: number; lat: number }
  ) {
    state.newUserLocation = [lng, lat]
  },
  anotherMutation() {
    console.log('anotherMutation')
  },
  setIsLoadingPlaces(state) {
    state.isLoadingPlaces = true
  },
  setPlaces(state, places) {
    state.places = places
    state.isLoadingPlaces = false
  },
}

export default mutation
