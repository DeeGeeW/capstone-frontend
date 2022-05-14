<script>
import axios from "axios";

export default {
  data: function () {
    return {
      migrations: [],
      searchText: "",
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
            <p>Longitude: {{ migration.lng }}</p>
            <p>Lattitude: {{ migration.lat }}</p>
          </div>
          <div class="column">
            <p>Observation Validated: {{ migration.obsValid }}</p>
            <p>Private Property: {{ migration.locationPrivate }}</p>
          </div>
          <div class="column">
            <button>hi</button>
            <h2>Common Name: {{ migration.comName }}</h2>
            <p>Location Address: {{ migration.locName }}</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<style>
.mig-box {
  border: inset;
  margin: 10px;
  /* padding: 10px; */
  background-color: aquamarine;
}
.mig-box .column {
  float: left;
  width: 33.33%;
}
</style>
