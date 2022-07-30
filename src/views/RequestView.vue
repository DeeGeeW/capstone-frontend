<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newRequestParams: {},
      errors: [],
      requests: [],
      request: [],
      id: [],
    };
  },
  created: function () {
    this.indexRequests();
    console.log(this.newSessionParams);
  },
  mounted: function () {
    console.log(this.$route.params.id);
    axios.get(`/requests/${this.$route.params.id}`).then((response) => {
      this.request = response.data;
      console.log(this.request);
    });
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
    destroyRequest: function (request) {
      axios.delete("/requests/" + request.id).then((response) => {
        console.log("requests destroy", response);
      });
    },
  },
};
</script>

<template>
  <body class="request-bg">
    <div class="add-request">
      <form v-on:submit.prevent="submit">
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
            <br />
            <p>{{ request.id }}: {{ request.new_bird }}</p>
            <div>
              <button v-on:click="destroyRequest(request)">Destroy request</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>
<style>
.birds_requested p {
  border: black;
  border-radius: 5px;
  color: darkviolet;
  background-color: lightgreen;
  display: flex;
  display: inline;
  padding: 3px;
}
</style>
