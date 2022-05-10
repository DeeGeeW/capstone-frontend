<template>
  <div class="location-page">
    <!-- <div class="test" v-bind:style="{ backgroundImage: `url(${location.background_url})` }" v-bind:key="location.id"></div> -->
    <h1 class="info-border-state"></h1>
    <!-- <p>c_name: {{ location.c_name }}</p> -->
    <img
      class="location-image"
      v-bind:src="location.location_comments"
      v-bind:alt="location.c_name"
      style="max-width: 250px"
    />
    <!-- <p class="info-border">Scientific Name: {{ location.s_name }}</p> -->
    <!-- <p class="info-border">Description: {{ location.state_bird }}</p> -->
    <!-- <p>{{ location.comments[0].comment_text }}</p> -->
    <!-- <div class="container">
      <p v-for="location.comment in comments", v-text"comment"></p>
    </div> -->
    <router-link class="routes" to="/comments">SHARE SPOT!!</router-link>
    <router-link class="routes" to="/locations" style="margin-right: 10px">Back to all locations</router-link>
    <div class="comment-box-state" v-for="comment in location.comments" v-bind:key="comment.id">
      <p>User ID: {{ comment.user_id }} | Comment ID: {{ comment.id }}</p>
      <p>{{ comment.comment_text }}</p>
      <!-- <p>{{ location.c_name }} | State ID: {{ comment.location_id }}</p> -->
      <p>Lat: {{ comment.lat }} | Long: {{ comment.long }}</p>
      <div>
        <button v-on:click="setMap(comment)">Fly</button>
      </div>
    </div>
    <dialog id="map">
      <form method="modal">
        <button>LAND!</button>
        <h1>teste!</h1>
        <p>{{ this.currentLocation.id }}</p>
        <p>{{ this.currentLocation.long }}</p>
        <p>{{ this.currentLocation.lat }}</p>
      </form>
    </dialog>
    <!-- <router-link v-bind:to="`/locations/${location.id}/edit`" style="margin-right: 10px">Edit location</router-link> -->
    <!-- <button v-on:click="destroylocation()">Delete</button> -->
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      location: {},
      currentComment: {},
      comments: {},
      currentLocation: [],
    };
  },
  mounted: function () {
    console.log(this.$route.params.id);
    axios.get(`/locations/${this.$route.params.id}`).then((response) => {
      console.log("teste");
      this.location = response.data;
      this.comments = this.location.comments;
      console.log(this.comment);
      console.log(this.location);
    });
  },
  // console.log(index(0));
  // function (comments_i) {
  //   while (comments_i < location.comments.length){
  //     return comments_i;
  //   }
  // }
  // console.log(0);
  methods: {
    setMap(location) {
      this.currentLocation = location;
      document.querySelector("#map").showModal();
    },
    // destroylocation() {
    //   axios.delete(`/locations/${this.location.id}`).then((response) => {
    //     console.log(response);
    //     this.$router.push("/locations");
    //   });
    // },
    // },
  },
};
</script>

<style>
/* div {
  background-image: url(location.background_url);
} */
.location-page {
  font-family: Rubik Bubbles;
  background-image: url("https://c4.wallpaperflare.com/wallpaper/942/211/578/one-piece-anime-girls-map-anime-boys-wallpaper-preview.jpg");
}
.comment-box-state {
  border-style: inset;
  color: gold;
  background-color: black;
}
.test {
  height: 100px;
}
.location-image {
  border-radius: 50px;
  padding: 40px;
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
