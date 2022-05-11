<template>
  <body class="bird-body">
    <div class="bird-page" v-bind:style="{ backgroundImage: `url(${bird.background_url})` }">
      <!-- <div class="test" v-bind:style="{ backgroundImage: `url(${bird.background_url})` }" v-bind:key="bird.id"></div> -->
      <h1 class="info-border">{{ bird.c_name }}</h1>
      <!-- <p>c_name: {{ bird.c_name }}</p> -->
      <img class="bird-image" v-bind:src="bird.image_url" v-bind:alt="bird.c_name" style="max-width: 250px" />
      <p class="info-border">Scientific Name: {{ bird.s_name }}</p>
      <p class="info-border">Description: {{ bird.description }}</p>
      <!-- <p>{{ bird.comments[0].comment_text }}</p> -->
      <!-- <div class="container">
      <p v-for="bird.comment in comments", v-text"comment"></p>
    </div> -->
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
          <!-- <button>LAND!</button>
        <h1>teste!</h1>
        <p>{{ this.currentBird.id }}</p>
        <p>{{ this.currentBird.long }}</p>
        <p>{{ this.currentBird.lat }}</p> -->
          <button>LAND!</button>
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
      mapboxgl.accessToken =
        "pk.eyJ1IjoiZWFnbGVzZmFuODkiLCJhIjoiY2wzMGgzZmZtMDBwOTNkcGRyNWxrb3NlNCJ9.tFaIEmtceV5FiKm9jwHxGQ";
      const map = new mapboxgl.Map({
        container: "map", // container ID
        style: "mapbox://styles/mapbox/streets-v11", // style URL
        center: [this.currentBird.long, this.currentBird.lat], // starting position [lng, lat]
        // center: [this.currentBird.long, this.currentBird.lat],
        zoom: 15, // starting zoom
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
.bird-page {
  font-family: Rubik Bubbles;
}
div .comment-box {
  border-style: inset;
  color: Black;
  background-color: gold;
  margin: 8px;
}
.comment-box h3 {
  border-style: inset;
  color: gold;
  background-color: black;
  border-radius: 10px;
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
}
/* .bird-page .backgroundImage {
  size: 150px;
} */
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
