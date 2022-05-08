<template>
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
    <router-link to="/comments">SHARE SPOT!!</router-link>
    <router-link to="/" style="margin-right: 10px">Back to all birds</router-link>
    <div class="comment-box" v-for="comment in comments" v-bind:key="comment.id">
      <p>User ID: {{ comment.user_id }} | Comment ID: {{ comment.id }}</p>
      <p>{{ comment.comment_text }}</p>
      <p>{{ bird.c_name }} | State ID: {{ comment.location_id }}</p>
      <p>Lat: {{ comment.lat }} | Long: {{ comment.long }}</p>
      <div>
        <button v-on:click="setMap(comment)">Fly</button>
      </div>
      <!-- <dialog id="map">
        <form method="modal">
          <button>LAND!</button>
          <h1>teste!</h1>
          <p>{{ comment }}</p>
          <p>{{ comment.id }}</p>
          <p>{{ comment.long }}</p>
          <p>{{ comment.lat }}</p>
        </form>
      </dialog> -->
    </div>
    <!-- <div v-for="comment in bird.comments" v-bind:key="comment.id"> -->
    <dialog id="map">
      <form method="modal">
        <button>LAND!</button>
        <h1>teste!</h1>
        <p>{{ this.currentBird.id }}</p>
        <p>{{ this.currentBird.long }}</p>
        <p>{{ this.currentBird.lat }}</p>
      </form>
    </dialog>
    <!-- </div> -->
    <!-- <router-link v-bind:to="`/birds/${bird.id}/edit`" style="margin-right: 10px">Edit bird</router-link> -->
    <!-- <button v-on:click="destroybird()">Delete</button> -->
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      bird: {},
      currentComment: {},
      comments: {},
      currentBird: [],
    };
  },
  mounted: function () {
    console.log(this.$route.params.id);
    axios.get(`/birds/${this.$route.params.id}`).then((response) => {
      console.log("teste");
      this.bird = response.data;
      this.comments = this.bird.comments;
      console.log(this.comment);
      console.log(this.bird);
    });
  },
  // console.log(index(0));
  // function (comments_i) {
  //   while (comments_i < bird.comments.length){
  //     return comments_i;
  //   }
  // }
  // console.log(0);
  methods: {
    // getPlaces() {
    //   // make axios
    //   this.places = [
    //     { lat: comment.lat, lng: comment.long, description: "The Link" },
    //   ];
    //   this.setMap();
    // },
    setMap(bird) {
      // mapboxgl.accessToken = process.env.VUE_APP_MAP_API_KEY;
      // const map = new mapboxgl.Map({
      //   container: "map", // container ID
      //   style: "mapbox://styles/mapbox/dark-v10", // style URL
      //   center: [this.places[0].lng, this.places[0].lat], // starting position [lng, lat]
      //   zoom: 9, // starting zoom
      this.currentBird = bird;
      document.querySelector("#map").showModal();
    },
  },
};
</script>

<style>
/* div {
  background-image: url(bird.background_url);
} */
.bird-page {
  font-family: Rubik Bubbles;
}
div .comment-box {
  border-style: inset;
  color: Black;
  background-color: gold;
}
.test {
  height: 100px;
}
.bird-image {
  border-radius: 50px;
}

.info-border {
  border-style: inset;
  color: aquamarine;
  background-color: blueviolet;
  border-radius: 10px;

  display: inline-block;
  /* text-align: center; */
}
</style>
