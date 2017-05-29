<template>
  <v-container fluid class="no_padding">
    <v-layout class="row_full without_margin">
      <v-flex xs9 class="map_container">
        <div id="map" ref="map" />
      </v-flex>
      <v-flex xs3 class="map_data">
        <v-card class="green darken-1 white--text">
          <v-card-text>
            <div>
              Trajet terminé à <b>12h30</b>.
            </div>
          </v-card-text>
        </v-card>

        <v-card class="blue darken-1 white--text">
          <v-card-text>
            <div>
              Trajet démarré à <b>12h26</b>.<br>
              Dernière mise à jour : <b>12h30 (il y a 20min)</b>
            </div>
          </v-card-text>
        </v-card>

        <v-card class="white">
          <v-card-text>
            <div>
              <v-icon>flight_takeoff</v-icon> Départ à <b>12h30</b><br>
              <v-icon>hourglass_empty</v-icon> <b>20 minutes</b> de trajet<br>
              <v-icon>trending_up</v-icon> <b>50km</b> parcourus<br>
              <v-icon>linear_scale</v-icon> <b>100km/h</b> de vitesse moyenne<br>
              <v-icon>trending_down</v-icon> <b>50km</b> restants<br>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
      id: null,
      map: null,
      fromMarker: null,
      toMarker: null,
      positionMarker: null,
      pathPolyline: null
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
      var uluru = {lat: -20.363, lng: 131.044}
      var uluru2 = {lat: -25.363, lng: 131.044}
      var uluru3 = {lat: -30.363, lng: 131.044}
      this.map = new window.google.maps.Map(this.$refs.map, {
        zoom: 5,
        center: uluru
      })
      this.fromMarker = new window.google.maps.Marker({
        icon: '/map-icons/marker_blue.png',
        title: 'Position de départ',
        position: uluru,
        map: this.map
      })
      this.toMarker = new window.google.maps.Marker({
        icon: '/map-icons/marker_red.png',
        title: "Position d'arrivée",
        position: uluru3,
        map: this.map
      })
      this.positionMarker = new window.google.maps.Marker({
        icon: '/map-icons/person.png',
        title: 'Position actuelle',
        position: uluru2,
        map: this.map
      })

      const flightPlanCoordinates = [
        {lat: 37.772, lng: -122.214},
        {lat: 21.291, lng: -157.821},
        {lat: -18.142, lng: 178.431},
        {lat: -27.467, lng: 153.027}
      ]

      this.pathPolyline = new window.google.maps.Polyline({
        path: flightPlanCoordinates,
        geodesic: true,
        strokeColor: '#e74c3c',
        strokeOpacity: 1.0,
        strokeWeight: 2,
        map: this.map
      })
    }
  }
}
</script>

<style>
html, body, #__nuxt, .container, .row_full, .map_container {
  height: 100%;
}

.no_padding {
  padding: 0;
}

.without_margin {
  margin: 0;
}

#map {
  width: 100%;
  height: 100%;
}

.map_container {
  padding: 0 !important;
}

.map_data {
  padding: 0 !important;
}
</style>
