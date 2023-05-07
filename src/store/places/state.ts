import { Feature } from '@/interfaces/places'

export interface PlacesState {
  isLoading: boolean
  userLocation: [number, number] | undefined // longitud, latitud
  newUserLocation: [number, number] | undefined // longitud, latitud
  isLoadingPlaces: boolean
  places: Feature[]
}

function state(): PlacesState {
  return {
    isLoading: false,
    userLocation: undefined,
    newUserLocation: undefined,
    isLoadingPlaces: false,
    places: [],
  }
}

export default state
