<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Choose location.",
      locations: [],
      currentLocation: {},
      searchText: "",
    };
  },
  created: function () {
    this.indexLocations();
  },
  methods: {
    indexLocations: function () {
      axios.get("/locations").then((response) => {
        console.log(response.data);
        this.locations = response.data;
      });
    },
    findLocations() {
      return this.locations.forEach((location) => {
        console.log(location.location_comments);
        // return this.locations.filter((location for localhost
        var lowercaseTitle = location.state.toLowerCase();
        var lowercaseSearchText = this.searchText.toLowerCase();
        return lowercaseTitle.includes(lowercaseSearchText);
      });
    },
    showLocation(location) {
      axios.get(`/locations/${location.id}`).then((response) => {
        this.currentLocation = response.data;
        document.querySelector("#location-details").showModal();
      });
    },
  },
};
</script>

<template>
  <body class="state-bg">
    <div class="home row">
      <h1>Choose location. Find location. Share location.</h1>
      <div class="d-flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search by State (Abv)."
          aria-label="Search by State (Abv)."
          v-model="searchText"
          style="width: 200px"
        />
      </div>
      <div
        class="col"
        v-bind:class="{ selected: location === currentLocation }"
        v-for="location in findLocations()"
        v-bind:key="location.id"
        v-on:mouseover="currentLocation = location"
      >
        <div class="card" style="width: 18rem">
          <img v-bind:src="location.location_comments" class="card-img-top" v-bind:alt="location.c_name" />
          <div class="card-body">
            <p class="card-text">{{ location.state }}</p>
            <a v-bind:href="`/locations/${location.id}`" class="btn btn-primary">More Info</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
.state-bg .selected .card-body {
  color: goldenrod;
  background-color: rgb(54, 53, 53);
}
.state-bg .card-body {
  color: black;
  background-color: goldenrod;
}
.state-bg .card img {
  height: 200px;
  object-fit: cover;
}
.form-control {
  margin: 20px;
  text-align: center;
}
</style>
