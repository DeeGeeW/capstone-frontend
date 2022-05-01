<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Ready for an ADVENTURE?!",
      birds: [],
      locations: [],
      currentbird: {},
    };
  },
  created: function () {
    this.indexBirds();
    this.indexLocations();
  },
  methods: {
    indexBirds: function () {
      axios.get("/birds").then((response) => {
        console.log(response.data);
        this.birds = response.data;
      });
    },
    indexLocations: function () {
      axios.get("/locations").then((response) => {
        console.log(response.data);
        this.locations = response.data;
      });
    },
    showBird(bird) {
      axios.get(`/birds/${bird.id}`).then((response) => {
        this.currentbird = response.data;
        document.querySelector("#bird-details").showModal();
      });
    },
  },
};
</script>

<template>
  <div class="home row">
    <h1>{{ message }}</h1>
    <div
      class="col"
      v-bind:class="{ selected: bird === currentbird }"
      v-for="bird in birds"
      v-bind:key="bird.id"
      v-on:mouseover="currentbird = bird"
    >
      <div class="card" style="width: 18rem">
        <img v-bind:src="bird.image_url" class="card-img-top" v-bind:alt="bird.c_name" />
        <div class="card-body">
          <!-- <h5 class="card-title">{{ bird.name }}</h5> -->
          <p class="card-text">{{ bird.c_name }}</p>
          <a v-bind:href="`/birds/${bird.id}`" class="btn btn-primary">More Info</a>
        </div>
        <!-- <button v-on:click="showBird(bird)">More test Info</button> -->
      </div>
    </div>
  </div>
  <div v-for="location in locations" v-bind:key="location.state">
    <h2>{{ location.state }}</h2>
  </div>
</template>

<style>
/* div {text} */
.selected .card-body {
  color: orangered;
  background-color: aqua;
}
.card-body {
  background-color: gainsboro;
}
img {
  height: 200px;
  object-fit: cover;
}
div {
  background-color: pink;
}
</style>
