<script setup>
import {GoogleMap, Marker, MarkerCluster} from "vue3-google-map";

const map = [
  {
    "title": "Наші місцезнаходження",
    "center" : { lat: 50.250939, lng: 28.633281 },
    "zoom" : 10,
    "locations": [
      { lat: 50.250939, lng: 28.633281 },
      { lat: 49.89706750297383, lng: 28.57705363483852 },
      { lat: 50.18133165766057, lng: 28.736301550486026 },
      { lat: 50.237932, lng: 28.568269},
      { lat: 50.454317922000165, lng: 28.66775325873092 }
    ]
  }
]

</script>

<template>
  <section content="section">
    <h2>{{ map[0].title }}</h2>

    <GoogleMap api-key="AIzaSyDzTIqKTbTD-aDvdt6IUBOZ8nrsfu3OGM8" style="width: 100%; height: 500px" :center="map[0].center"
               :zoom="map[0].zoom">
      <Marker :options="map[0].center"/>

      <MarkerCluster>
        <Marker v-for="(location, i) in map[0].locations" :options="{ position: location }" :key="i" />
      </MarkerCluster>
    </GoogleMap>
  </section>
</template>

<style scoped lang="scss">

</style>