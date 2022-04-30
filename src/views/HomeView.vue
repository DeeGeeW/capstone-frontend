<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Ready for an ADVENTURE?!",
      birds: [],
      locations: [],
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
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="bird in birds" v-bind:key="bird.id">
      <h3>{{ bird.c_name }}</h3>
    </div>
    <div v-for="location in locations" v-bind:key="location.state">
      <h2>{{ location.state }}</h2>
    </div>
  </div>
</template>

<style></style>
