<template>
  <body class="state-ind-bg">
    <div class="location-page">
      <img
        class="location-image"
        v-bind:src="location.location_comments"
        v-bind:alt="location.c_name"
        style="max-width: 250px"
      />
      <router-link class="routes" to="/comments">SHARE SPOT!!</router-link>
      <router-link class="routes" to="/locations">Back to all locations</router-link>
      <div class="comment-box-state" v-for="comment in location.comments" v-bind:key="comment.id">
        <p>User ID: {{ comment.user_id }} | Comment ID: {{ comment.id }}</p>
        <p>{{ comment.comment_text }}</p>
        <p>Lat: {{ comment.lat }} | Long: {{ comment.long }}</p>
        <div>
          <button v-on:click="setMap(comment)">Fly</button>
        </div>
      </div>
      <dialog id="map">
        <form method="modal"></form>
      </dialog>
    </div>
    <!-- </div> -->
  </body>
</template>

<script>
/* global mapboxgl */
import axios from "axios";
export default {
  data: function () {
    return {
      location: {},
      currentComment: {},
      comments: {},
      currentLocation: [],
      places: [],
    };
  },
  mounted: function () {
    console.log(this.$route.params.id);
    axios.get(`/locations/${this.$route.params.id}`).then((response) => {
      this.location = response.data;
      this.comments = this.location.comments;
      console.log(this.comment);
      console.log(this.location);
    });
  },
  methods: {
    getPlaces() {
      this.places = [{ lat: this.currentBird.long, lng: this.currentBird.lat, description: "The Link" }];
      this.setMap();
    },
    setMap(location) {
      this.currentLocation = location;
      document.querySelector("#map").showModal();
      mapboxgl.accessToken = process.env.VUE_APP_MAP_API_KEY;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [this.currentLocation.long, this.currentLocation.lat], // [lng, lat]
        zoom: 19, // zoom
      });
      this.places.forEach((place) => {
        // create the popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
        const marker = new mapboxgl.Marker().setLngLat([place.lng, place.lat]).setPopup(popup).addTo(map);
        // setMarker(marker).addTo(map);
        console.log(map, marker);
      });
    },
  },
};
</script>

<style>
.location-page {
  background-image: url("https://cdn.suwalls.com/wallpapers/anime/anime-city-28573-1920x1080.jpg");
  padding-bottom: 440px;
}
.location-page img {
  margin: 50px;
}
.comment-box-state {
  border-style: inset;
  border-image: linear-gradient(45deg, orange, red) 1;
  color: gold;
  background-color: black;
  border-radius: 10px;
  margin: 20px;
}

.info-border-state {
  border-style: inset;
  color: aquamarine;
  background-color: blueviolet;
  border-radius: 10px;
  height: 300px;

  display: inline-block;
  /* text-align: center; */
}
.routes {
  border-style: inset;
  background-color: aquamarine;
  color: blueviolet;
  border-radius: 8px;
  padding: 3px;
  margin: 8px;
}
</style>
