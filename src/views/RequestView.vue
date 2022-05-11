<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newRequestParams: {},
      errors: [],
      requests: [],
    };
  },
  created: function () {
    this.indexRequests();
  },
  methods: {
    submit: function () {
      axios
        .post("/requests", this.newRequestParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/requests");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    indexRequests: function () {
      axios.get("/requests").then((response) => {
        console.log(response.data);
        this.requests = response.data;
      });
    },
  },
};
</script>

<template>
  <body class="Request-bg">
    <div class="add-Request">
      <form v-on:submit.prevent="submit()">
        <h1>Request Bird</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>Request:</label>
          <input type="text" style="width: 500px" v-model="newRequestParams.new_bird" />
        </div>
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div class="birds_requested">
        <div>
          <h2>Requested Birds</h2>
          <br />
          <div v-for="request in requests" v-bind:key="request.id">
            <p>{{ request.id }}: {{ request.new_bird }}</p>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
