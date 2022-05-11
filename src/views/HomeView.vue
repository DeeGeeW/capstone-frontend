<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Choose Bird.",
      birds: [],
      locations: [],
      currentbird: {},
      searchText: "",
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
    filterBirds() {
      return this.birds.filter((bird) => {
        var lowercaseTitle = bird.c_name.toLowerCase();
        var lowercaseSearchText = this.searchText.toLowerCase();
        return lowercaseTitle.includes(lowercaseSearchText);
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
  <body class="home-bg">
    <div class="home row">
      <h1>Choose Bird. Find Bird. Share Bird.</h1>
      <div class="d - flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search by Bird Common Name"
          aria-label="Search by Bird Common Name"
          v-model="searchText"
          style="width: 400px"
        />
        <!-- <button class="btn btn-outline-success" type="submit" v-on:click="searchBirds()">Search</button> -->
      </div>
      <div
        class="col"
        v-bind:class="{ selected: bird === currentbird }"
        v-for="bird in filterBirds()"
        v-bind:key="bird.id"
        v-on:mouseover="currentbird = bird"
      >
        <div v-if="searchText" class="card" style="width: 18rem">
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
  </body>
</template>

<style>
/* div {text} */
.home-bg .selected .card-body {
  color: black;
  background-color: gold;
}
.home-bg .card-body {
  background-color: rgb(54, 53, 53);
}
/* img {
  height: 200px;
  object-fit: cover;
} */
.card {
  margin: 20px;
}
</style>
