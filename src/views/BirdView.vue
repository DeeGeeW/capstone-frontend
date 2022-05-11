<template>
  <body class="bird-body">
    <div class="bird-page" v-bind:style="{ backgroundImage: `url(${bird.background_url})` }">
      <!-- <div class="test" v-bind:style="{ backgroundImage: `url(${bird.background_url})` }" v-bind:key="bird.id"></div> -->
      <h1 class="info-border">{{ bird.c_name }}</h1>
      <img class="bird-image" v-bind:src="bird.image_url" v-bind:alt="bird.c_name" style="max-width: 250px" />
      <p class="info-border">Scientific Name: {{ bird.s_name }}</p>
      <p class="info-border">Description: {{ bird.description }}</p>
      <router-link class="routes" to="/comments">SHARE SPOT!!</router-link>
      <router-link class="routes" to="/" style="margin-right: 10px">Back to all birds</router-link>
      <div class="comment-box" v-for="comment in comments" v-bind:key="comment.id">
        <p>User ID: {{ comment.user_id }} | Comment ID: {{ comment.id }}</p>
        <h3>{{ comment.comment_text }}</h3>
        <p>{{ bird.c_name }} | State ID: {{ comment.location_id }}</p>
        <p>Lat: {{ comment.lat }} | Long: {{ comment.long }}</p>
        <div>
          <button v-on:click="setMap(comment)">Fly</button>
        </div>
      </div>
      <dialog id="map">
        <form method="modal">
          <!-- <p>{{ this.currentBird.id }}</p> -->
        </form>
      </dialog>
    </div>
  </body>
</template>

<script>
/* global mapboxgl */
import axios from "axios";
export default {
  data: function () {
    return {
      bird: {},
      currentComment: {},
      comments: {},
      currentBird: [],
      places: [],
    };
  },
  mounted: function () {
    console.log(this.$route.params.id);
    axios.get(`/birds/${this.$route.params.id}`).then((response) => {
      this.bird = response.data;
      this.comments = this.bird.comments;
      console.log(this.comment);
      console.log(this.bird);
    });
    // mapboxgl.accessToken =
    //   "pk.eyJ1IjoiZWFnbGVzZmFuODkiLCJhIjoiY2wzMGgzZmZtMDBwOTNkcGRyNWxrb3NlNCJ9.tFaIEmtceV5FiKm9jwHxGQ";
    // const map = new mapboxgl.Map({
    //   container: "map", // container ID
    //   style: "mapbox://styles/mapbox/streets-v11", // style URL
    //   center: [-87.623177, 41.881832], // starting position [lng, lat]
    //   zoom: 9, // starting zoom
    // });
    // console.log(map);
  },
  // created: function () {
  //   this.getPlaces();
  // },
  methods: {
    getPlaces() {
      // make axios
      this.places = [{ lat: this.currentBird.long, lng: this.currentBird.lat, description: "The Link" }];
      this.setMap();
    },
    setMap(bird) {
      this.currentBird = bird;
      document.querySelector("#map").showModal();
      mapboxgl.accessToken = process.env.VUE_APP_MAP_API_KEY;
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/satellite-streets-v11", // style URL
        center: [this.currentBird.long, this.currentBird.lat], // starting position [lng, lat]
        // center: [this.currentBird.long, this.currentBird.lat],
        zoom: 19, // starting zoom
      });
      this.places.forEach((place) => {
        // create the popup
        const popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
        const marker = new mapboxgl.Marker().setLngLat([place.lng, place.lat]).setPopup(popup).addTo(map);
        console.log(map, marker);
      });
    },
  },
};
</script>

<style>
div .comment-box {
  border-style: inset;
  color: Black;
  background-image: url("https://ca-times.brightspotcdn.com/dims4/default/ed38845/2147483647/strip/true/crop/5000x3333+0+0/resize/1240x827!/format/webp/quality/90/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F90%2F72%2F04a53e28421cbd1e09c4506610e7%2Fla-tr-birdwatching-web-final.jpg");
  margin: 8px;
}
.comment-box h3 {
  border-style: inset;
  color: gold;
  background-color: black;
  border-radius: 10px;
}
.comment-box p {
  border-style: inset;
  color: gold;
  background-color: black;
  border-radius: 10px;
  display: inline-block;
}
.test {
  height: 100px;
}
.bird-image {
  padding: 30px;
  border-radius: 50px;
}
#map {
  height: 600px;
  width: 600px;
  position: fixed;
}
.info-border {
  border-style: inset;
  color: aquamarine;
  background-color: blueviolet;
  border-radius: 10px;

  display: inline-block;
  /* text-align: center; */
}
.routes {
  border-style: inset;
  background-color: aquamarine;
  color: blueviolet;
}
</style>
