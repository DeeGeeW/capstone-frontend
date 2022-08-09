<template>
  <body class="bird-body">
    <div class="bird-page" v-bind:style="{ backgroundImage: `url(${bird.background_url})` }">
      <h1 class="info-border">{{ bird.c_name }}</h1>
      <img class="bird-image" v-bind:src="bird.image_url" v-bind:alt="bird.c_name" style="max-width: 250px" />
      <p class="info-border">Bird Id: {{ bird.id }} | Scientific Name: {{ bird.s_name }}</p>
      <p class="info-border">Description: {{ bird.description }}</p>
      <router-link class="routes" to="/comments">SHARE SPOT!!</router-link>
      <router-link class="routes" to="/" style="margin-right: 10px">Back to all birds</router-link>
      <div class="comment-box" v-for="comment in comments" v-bind:key="comment.id">
        <div class="row">
          <div class="column">
            <h3>{{ comment.comment_text }}</h3>
          </div>
          <div class="column">
            <p>User ID: {{ comment.user_id }} | Comment ID: {{ comment.id }}</p>
            <br />
            <p>{{ bird.c_name }} | State ID: {{ comment.location_id }}</p>
            <div>
              <button v-on:click="destroyComment(comment)">Destroy Comment</button>
            </div>
          </div>
          <div class="column">
            <p>Lat: {{ comment.lat }} | Long: {{ comment.long }}</p>
            <div>
              <button v-on:click="setMap(comment)">Fly</button>
            </div>
          </div>
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
      console.log(this.comments);
      console.log(this.bird);
    });
  },
  methods: {
    getPlaces() {
      this.places = [{ lat: this.currentBird.long, lng: this.currentBird.lat, description: "GO HERE!" }];
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
        zoom: 19, // starting zoom
      });
      this.places.forEach(() => {
        const marker = new mapboxgl.Marker(bird).setLngLat([this.currentBird.long, this.currentBird.lat]).addTo(map);
        console.log(map, marker);
      });
    },
    destroyComment: function (comment) {
      axios.delete("/comments/" + comment.id).then((response) => {
        console.log("comments destroy", response);
      });
    },
  },
};
</script>

<style>
div .comment-box {
  border-style: inset;
  color: Black;
  background-image: url("https://w0.peakpx.com/wallpaper/653/506/HD-wallpaper-anime-bird-anime-bird-cartoon-nature.jpg");
  margin: 8px;
}
.comment-box h3 {
  border: inset;
  border-image: linear-gradient(45deg, turquoise, blueviolet) 1;
  color: gold;
  background-color: black;
  border-radius: 10px;
  margin: 10px;
}
.comment-box p {
  border-style: inset;
  border-image: linear-gradient(45deg, turquoise, blueviolet) 1;
  color: gold;
  background-color: black;
  border-radius: 10px;
  padding: 8px;
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
.bird-page {
  background-size: 300px;
}
.comment-box .column {
  flex: 33%;
  padding: 10px;
  margin: 10 px;
}
</style>
