<template>
  <v-container fluid class="no_padding">
    <v-layout class="row_full without_margin">
      <v-flex xs9 class="map_container">
        <div id="map" ref="map" />
      </v-flex>
      <v-flex xs3 class="map_data" v-show="!isLoading">
        <v-card class="green darken-1 white--text" v-if="journey.isFinished">
          <v-card-text>
            <div>
              Trajet terminé à <b>{{ formatDate(journey.end.date) }} (il y a {{ distanceInWords(journey.end.date) }})</b>.
            </div>
          </v-card-text>
        </v-card>

        <v-card class="blue darken-1 white--text" v-else>
          <v-card-text>
            <div>
              Trajet démarré le <b>{{ formatDate(journey.start.date) }} (il y a {{ distanceInWords(journey.start.date) }})</b>.<br>
              Dernière mise à jour : <b>{{ formatDate(lastPosition.date) }} (il y a {{ distanceInWords(lastPosition.date) }})</b>
            </div>
          </v-card-text>
        </v-card>

        <v-card class="white">
          <v-card-text>
            <div>
              <v-icon>hourglass_empty</v-icon> <b>{{ journey.isFinished ? distanceInWords(journey.start.date, journey.end.date) : distanceInWords(journey.start.date) }}</b> de trajet<br>
              <v-icon>trending_up</v-icon> <b>~{{ distanceBetweenTwoCoordinates(journey.start, lastPosition) }}km</b> parcourus<br>
              <v-icon>linear_scale</v-icon> <b>~{{ parseInt(distanceBetweenTwoCoordinates(journey.start, lastPosition) / (((journey.isFinished ? journey.end.date : new Date()) - journey.start.date) / 36e5)) }}km/h</b> de vitesse moyenne<br>
              <v-icon>trending_down</v-icon> <b>~{{ journey.totalDistance - distanceBetweenTwoCoordinates(journey.start, lastPosition) }}km</b> restants<br><br>
              <v-progress-circular
                :size="50"
                :width="5"
                :rotate="-90"
                :value="parseInt(distanceBetweenTwoCoordinates(journey.start, lastPosition) * 100 / journey.totalDistance)"
                class="teal--text progress"
              >
                ~{{ parseInt(distanceBetweenTwoCoordinates(journey.start, lastPosition) * 100 / journey.totalDistance) }}%
              </v-progress-circular> <div class="progress_text">du trajet effectué</div>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row justify-center>
      <v-dialog v-model="isLoading" persistent>
        <v-card>
          <v-card-row>
            <v-card-title>Chargement...</v-card-title>
          </v-card-row>
          <v-card-row>
            <v-card-text class="text-xs-center">
              <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" class="green--text">
              </v-progress-circular>
            </v-card-text>
          </v-card-row>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
import frLocale from 'date-fns/locale/fr'
import distanceInWords from 'date-fns/distance_in_words'
import format from 'date-fns/format'
import {WebSocket} from '~/lib/websocket'

const MAPS_API_KEY = 'AIzaSyAswGeCJTj45iAENRAflQJPEBeu-pW2PVQ'
const WS_API_URL = 'wss://cargo-api.herokuapp.com?token='
// const WS_API_URL = 'ws://127.0.0.1:2000?token='
const WS_CLOSE_CODES = {
  NO_TOKEN: 4000,
  NON_EXISTENT_TOKEN: 4001
}

export default {
  head: {
    script: [
      { src: `https://maps.googleapis.com/maps/api/js?key=${MAPS_API_KEY}`, async: true, defer: true }
    ]
  },
  data () {
    return {
      ws: null,
      isLoading: false,
      id: null,
      journey: {
        isFinished: null,
        start: {
          date: new Date(),
          geo: {
            lat: 0,
            long: 0
          }
        },
        end: {
          date: new Date(),
          geo: {
            lat: 0,
            long: 0
          }
        },
        totalDistance: 0
      },
      lastPosition: {
        date: new Date(),
        geo: {
          lat: 0,
          long: 0
        }
      },
      map: null,
      mapBounds: null,
      fromMarker: null,
      toMarker: null,
      positionsMarker: [],
      positionMarker: null,
      pathPolyline: null,
      pathHistory: null
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
  mounted () {
    this.isLoading = true

    this.ws = new WebSocket(`${WS_API_URL}${this.id}`)
    this.ws.start()

    this.ws.on('open', () => {
    })

    this.ws.on('message', (message) => {
      const [msgId, data] = JSON.parse(message)

      if (msgId === 'initial') {
        this.journey.isFinished = data.isFinished
        this.journey.start.date = new Date(data.start.date)
        this.journey.start.geo.lat = parseFloat(data.start.geo.lat)
        this.journey.start.geo.long = parseFloat(data.start.geo.long)
        if (this.journey.isFinished) this.journey.end.date = new Date(data.end.date)
        this.journey.end.geo.lat = parseFloat(data.end.geo.lat)
        this.journey.end.geo.long = parseFloat(data.end.geo.long)
        this.journey.totalDistance = this.distanceBetweenTwoCoordinates(this.journey.start, this.journey.end)

        const fromPoint = new window.google.maps.LatLng(this.journey.start.geo.lat, this.journey.start.geo.long)
        this.fromMarker = new window.google.maps.Marker({
          icon: '/map-icons/marker_blue.png',
          title: 'Position de départ',
          position: fromPoint,
          map: this.map
        })
        const toPoint = new window.google.maps.LatLng(this.journey.end.geo.lat, this.journey.end.geo.long)
        this.toMarker = new window.google.maps.Marker({
          icon: '/map-icons/marker_red.png',
          title: "Position d'arrivée",
          position: toPoint,
          map: this.map
        })

        this.mapBounds.extend(fromPoint)
        this.mapBounds.extend(toPoint)
        this.map.fitBounds(this.mapBounds)

        this.addPosition(this.journey.start)

        data.positions.forEach((position) => {
          this.addPosition(position)
        })

        this.isLoading = false
      } else if (msgId === 'position') {
        data.geo.lat = parseFloat(data.geo.lat)
        data.geo.long = parseFloat(data.geo.long)
        this.addPosition(data)
      } else if (msgId === 'finished') {
        this.isFinished = true
      }
    })

    this.ws.on('close', (event) => {
      if (event.code === WS_CLOSE_CODES.NON_EXISTENT_TOKEN) {
        this.ws.stop()
        this.$router.replace('/')
      } else {
        this.pathHistory = []
      }
    })

    this.ws.on('error', (err) => {
      console.log(err)
    })
  },
  methods: {
    initMap () {
      var eiffelTower = {lat: 48.858370, lng: 2.294481}
      this.map = new window.google.maps.Map(this.$refs.map, {
        zoom: 5,
        center: eiffelTower
      })
      this.mapBounds = new window.google.maps.LatLngBounds()

      this.positionMarker = new window.google.maps.Marker({
        icon: '/map-icons/person.png',
        title: 'Position actuelle',
        position: eiffelTower,
        map: this.map
      })

      this.pathHistory = []

      this.pathPolyline = new window.google.maps.Polyline({
        path: this.pathHistory,
        geodesic: true,
        strokeColor: '#27ae60',
        strokeOpacity: 1.0,
        strokeWeight: 5,
        map: this.map
      })
    },
    addPosition (position) {
      this.lastPosition = position

      const posObj = { lat: parseFloat(position.geo.lat), lng: parseFloat(position.geo.long) }

      this.positionMarker.setPosition(posObj)
      this.pathHistory.push(posObj)
      this.pathPolyline.setPath(this.pathHistory)
    },
    distanceBetweenTwoCoordinates (coord1, coord2) {
      const toRadians = (number) => {
        return number * Math.PI / 180
      }

      const R = 6371e3 // metres
      const φ1 = toRadians(coord1.geo.lat)
      const φ2 = toRadians(coord2.geo.lat)
      const Δφ = toRadians(coord2.geo.lat - coord1.geo.lat)
      const Δλ = toRadians(coord2.geo.long - coord1.geo.long)

      const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2)
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))

      const d = R * c

      return parseInt(d / 1000)
    },
    distanceInWords (date1, date2 = new Date()) {
      return distanceInWords(date1, date2, { locale: frLocale })
    },
    formatDate (date) {
      return format(date, 'DD/MM/YYYY à HH:mm', { locale: frLocale })
    }
  }
}
</script>

<style>
html, body, #__nuxt, .application, .container, .row_full, .map_container {
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

.progress {
  float: left;
}

.progress_text {
  height: 50px;
  line-height: 50px;
  margin-left: 60px;
}
</style>
