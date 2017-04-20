<template>
  <v-container fluid="fluid">
    <v-row class="row_full">
      <v-col xs9 class="map_container">
        <div id="map" ref="map" />
      </v-col>
      <v-col xs3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
const MAPS_API_KEY = 'AIzaSyAswGeCJTj45iAENRAflQJPEBeu-pW2PVQ'

export default {
  head: {
    script: [
      { src: `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}`, async: true, defer: true }
    ]
  },
  data () {
    return {
      id: null
    }
  },
  created () {
    this.id = this.$route.query.id
    if (!this.id) {
      this.$router.replace('/')
      return
    }

    if (!process.BROWSER_BUILD) return

    const googleWatchdog = setInterval(() => {
      if (typeof window.google !== 'undefined') {
        this.initMap()
        clearInterval(googleWatchdog)
      }
    }, 100)
  },
  methods: {
    initMap () {
      var uluru = {lat: -25.363, lng: 131.044}
      var map = new window.google.maps.Map(this.$refs.map, {
        zoom: 4,
        center: uluru
      })
      const markers = []
      markers.push(new window.google.maps.Marker({
        position: uluru,
        map: map
      }))
    }
  }
}
</script>

<style>
html, body, #__nuxt, .container, .row_full, .map_container {
  height: 100%;
}

#map {
  width: 100%;
  height: 100%;
}
</style>
