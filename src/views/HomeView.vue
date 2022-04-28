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
  },
  methods: {
    indexBirds: function () {
      axios.get("/birds").then((response) => {
        console.log(response.data);
        this.birds = response.data;
      });
    },
  },
};
</script>

<template>
  <div class="home">
    <h1>{{ message }}</h1>
    <div v-for="bird in birds" v-bind:key="bird.c_name">
      <h3>{{ bird.c_name }}</h3>
      <p>Scientific Name: {{ bird.s_name }}</p>
    </div>
  </div>
</template>

<style></style>
