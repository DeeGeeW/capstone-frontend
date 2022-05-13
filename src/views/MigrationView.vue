<script>
import axios from "axios";

export default {
  data: function () {
    return {
      migrations: [],
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
  },
};
</script>
<template>
  <body class="migs-bg">
    <div>
      <!-- <div v-if="migrations.locationPrivate === false" class="index-migs"> -->
      <h1>This months migrations in Tennessee</h1>
      <div v-for="migration in migrations" v-bind:key="migration.id">
        <div class="mig-box row" v-if="migration.locationPrivate === false && migration.obsValid === true">
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
