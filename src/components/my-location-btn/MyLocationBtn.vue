<template>
  <button
    v-if="isBtnReady"
    class="btn btn-primary"
    @click="onMyLocationClicked"
  >
  <i class="fa fa-solid fa-location-dot"></i>  Go to location
  <!-- <i class="fa fa-solid fa-location-dot" :class="{ isNotLocated: 'fa-bounce' }"></i> Go to location -->
  </button>
</template>

<script lang="ts">
import { useMapStore, usePlacesStore } from "@/composables";
import { computed, defineComponent } from "vue";
//import { computed, defineComponent, ref, watch, watchEffect } from "vue";

export default defineComponent({
  name: "MyLocationBtn",
  setup() {
    const { userLocation, isUserLocationReady } = usePlacesStore();
    const { map, isMapReady } = useMapStore();
    
    // let currentLocation = ref();

    // const location = () => {
    //   currentLocation.value = navigator.geolocation.getCurrentPosition(({coords}) => [coords.latitude, coords.longitude])
    // }

    // const isNotLocated = ref(false);

    // watchEffect(()=>{
    //   location();
    //   console.log(currentLocation);
    // })

    return {

      // isNotLocated,

      isBtnReady: computed<boolean>(
        () => isUserLocationReady.value && isMapReady.value
      ),

      onMyLocationClicked: () => {
        map.value?.flyTo({
          center: userLocation.value,
          zoom: 14,
        });
      },
    };
  },
});
</script>

<style scoped>
button {
  position: fixed;
  top: 30px;
  right: 30px;
}
</style>