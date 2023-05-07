<template>
  <div v-show="distance && duration" class="trip-container column">
    <div class="col">Distance: <strong>{{ distance }} kms </strong></div>
    <div class="col">Duration: <strong>{{ duration }} mnts</strong></div>
  </div>
</template>

<script setup lang="ts">
import { useMapStore } from "@/composables";

const { distance, duration } = useMapStore()
</script>

<style lang="scss" scoped>
.trip-container {
  padding: 10px;
  position: fixed;
  bottom: 15px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  font-size: 25px;
  width: 350px;
}

.trip-container:hover{
  z-index: 999;
}

strong{
  color: #42b983
}
</style>