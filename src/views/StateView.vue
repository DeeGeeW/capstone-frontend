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
    filterLocations() {
      return this.locations.filter((location) => {
        var lowercaseTitle = location.state.toLowerCase();
        var lowercaseSearchText = this.searchText.toLowerCase();
        return lowercaseTitle.includes(lowercaseSearchText);
      });
    },
    // indexLocations: function () {
    //   axios.get("/locations").then((response) => {
    //     console.log(response.data);
    //     this.locations = response.data;
    //   });
    // },
    showLocation(location) {
      axios.get(`/locations/${location.id}`).then((response) => {
        this.currentlocation = response.data;
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
        <!-- <button class="btn btn-outline-success" type="submit" v-on:click="searchlocations()">Search</button> -->
      </div>
      <div
        class="col"
        v-bind:class="{ selected: location === currentLocation }"
        v-for="location in filterLocations()"
        v-bind:key="location.id"
        v-on:mouseover="currentLocation = location"
      >
        <div class="card" style="width: 18rem">
          <img v-bind:src="location.location_comments" class="card-img-top" v-bind:alt="location.c_name" />
          <div class="card-body">
            <!-- <h5 class="card-title">{{ location.name }}</h5> -->
            <p class="card-text">{{ location.state }}</p>
            <a v-bind:href="`/locations/${location.id}`" class="btn btn-primary">More Info</a>
          </div>
          <!-- <button v-on:click="showlocation(location)">More test Info</button> -->
        </div>
      </div>
    </div>
    <!-- <div v-for="location in locations" v-bind:key="location.state">
    <h2>{{ location.state }}</h2>
  </div> -->
  </body>
</template>

<style>
/* div {text} */
.selected .card-body {
  color: black;
  background-color: gold;
}
.card-body {
  background-color: rgb(54, 53, 53);
}
img {
  height: 200px;
  object-fit: cover;
}
.home {
  /* background-image: url("https://cache.desktopnexus.com/cropped-wallpapers/2370/2370548-1680x1050-[DesktopNexus.com].jpg?st=7gLD1096gAgSnoYecksA_Q&e=1651804998"); */
  background-size: cover;
  font-family: "Tapestry", cursive;
}
.form-control {
  margin: 20px;
  text-align: center;
}
</style>
