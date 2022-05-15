<script>
import axios from "axios";

export default {
  data: function () {
    return {
      migrations: [],
      searchText: "",
      migCmment: [],
      places: [],
      currentMig: [],
      mig: [],
    };
  },
  created: function () {
    this.indexMigrations();
  },
  methods: {
    indexMigrations: function () {
      axios.get("/migs").then((response) => {
        console.log(response.data);
        this.migrations = response.data;
      });
    },
    filterMigrations() {
      return this.migrations.filter((migration) => {
        var lowercaseTitle = migration.comName.toLowerCase();
        var lowercaseSearchText = this.searchText.toLowerCase();
        return lowercaseTitle.includes(lowercaseSearchText);
      });
    },
    // getPlaces() {
    //   // make axios
    //   this.places = [{ lat: this.currentMig.long, lng: this.currentMig.lat, description: "GO HERE!" }];
    //   this.setMap();
    // },
    // setMap(migration) {
    //   this.currentMig = migration;
    //   console.log(this.currentMig.lng);
    //   document.querySelector("#map").showModal();
    //   mapboxgl.accessToken = process.env.VUE_APP_MAP_API_KEY;
    //   const map = new mapboxgl.Map({
    //     container: "map", // container ID
    //     style: "mapbox://styles/mapbox/satellite-streets-v11", // style URL
    //     center: [this.currentMig.lng, this.currentMig.lat], // starting position
    //     zoom: 19, // starting zoom
    //   });
    //   this.places.forEach((place) => {
    //     // create the popup
    //     const popup = new mapboxgl.Popup({ offset: 25 }).setText(place.description);
    //     const marker = new mapboxgl.Marker().setLngLat([place.lng, place.lat]).setPopup(popup).addTo(map);
    //     console.log(map, marker);
    //   });
    // },
  },
};
</script>
<template>
  <body class="migs-bg">
    <div>
      <!-- <div v-if="migrations.locationPrivate === false" class="index-migs"> -->
      <h1>This Months Migrations</h1>
      <div class="d - flex">
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search ANY Bird!"
          aria-label="Search ANY Bird!"
          v-model="searchText"
          style="width: 400px"
        />
        <!-- <button class="btn btn-outline-success" type="submit" v-on:click="searchmigrations()">Search</button> -->
      </div>
      <div v-for="migration in filterMigrations()" v-bind:key="migration.id">
        <div
          class="mig-box row"
          v-if="searchText && migration.locationPrivate === false && migration.obsValid === true"
        >
          <br />
          <div class="column">
            <h4>Longitude: {{ migration.lng }}</h4>
            <h4>Lattitude: {{ migration.lat }}</h4>
          </div>
          <div class="column">
            <h4>Observation Validated: {{ migration.obsValid }}</h4>
            <h4>Private Property: {{ migration.locationPrivate }}</h4>
            <h4>Date & Time Observed: {{ migration.obsDt }}</h4>
            <!-- <div>
              <button v-on:click="setMap(comment)">Fly</button>
            </div> -->
          </div>
          <div class="column">
            <h2>{{ migration.comName }}</h2>
            <br />
            <h3>Location Address: {{ migration.locName }}</h3>
          </div>
        </div>
      </div>
      <!-- <dialog id="map">
        <form method="modal"></form>
      </dialog> -->
    </div>
  </body>
</template>

<style>
.mig-box {
  border: inset;
  border-image: linear-gradient(45deg, turquoise, silver) 1;
  margin: 10px;
  /* padding: 10px; */
  background-image: url("https://jooinn.com/images1280_/birds-over-train-tracks.jpg");
}
.mig-box .column {
  flex: 50%;
  padding: 10px;
}
.mig-box h2 {
  border: inset;
  border-radius: 10px;
  background-color: black;
  display: inline;
  color: lavenderblush;
  margin: 5px;
}
.mig-box h3 {
  border: inset;
  border-radius: 10px;
  background-color: black;
  display: inline;
  color: lightcyan;
}
.mig-box h4 {
  color: lightcyan;
}
</style>
