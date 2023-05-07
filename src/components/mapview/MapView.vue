<script src="./MapView.ts"/>

<template>
  <div
    v-if="!isUserLocationReady"
    class="loading-map d-flex justify-content-center align-items-center"
  >
    <div class="text-center">
      <i
        class="fa-sharp fa-solid fa-spinner fa-spin fa-2xl"
        style="color: #ffffff"
      ></i>
    </div>
  </div>

  <div
    v-show="isUserLocationReady"
    class="map-container"
    ref="mapElement"
  ></div>
</template>


<style scoped>
.map-container {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background-color: rgb(206, 206, 206);
}
.loading-map {
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
}
</style>