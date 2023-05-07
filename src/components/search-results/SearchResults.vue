<template>
  <div v-if="isLoadingPlaces" class="alert alert-primary text-center">
    <i
      class="fa-sharp fa-solid fa-spinner fa-spin fa-2xl"
      style="color: #ffffff"
    ></i>
  </div>

  <ul v-else-if="places.length > 0" class="list-group mt-3">
    <li
      v-for="place in places"
      :key="place.id"
      :class="{ active: place.id === activePlace }"
      class="list-group-item list-group-item-action"
      @click="onPlaceClicked(place)"
    >
      <h5>{{ place.text }}</h5>
      <p>{{ place.place_name }}</p>
      <div align="right">
        <button
          class="btn btn-outline-primary btn-sm"
          :class="
            place.id === activePlace
              ? 'btn-outline-light'
              : 'btn-outline-primary'
          "
        >
          Directions
        </button>
      </div>
    </li>
  </ul>
</template>

<script lang="ts" src="./SearchResult.ts"/>

<style scoped>
li {
  cursor: pointer;
}

h5 {
  font-size: 15px !important;
}

p {
  font-size: 10px !important;
}

button {
  font-size: 15px !important;
}
</style>