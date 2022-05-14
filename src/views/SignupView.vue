<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <body class="signup-bg">
    <div class="signup">
      <form v-on:submit.prevent="submit()">
        <h1>Signup</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <label>User Name:</label>
          <input type="text" v-model="newUserParams.username" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" v-model="newUserParams.email" />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" v-model="newUserParams.password" />
        </div>
        <div>
          <label>Password confirmation:</label>
          <input type="password" v-model="newUserParams.password_confirmation" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </body>
</template>

<style>
.signup {
  /* background-color: antiquewhite; */
  /* border: inset; */
  text-align: left;
  margin-left: 30px;
}
.signup label {
  background-color: aliceblue;
}
.signup h1 {
  color: indianred;
  background-color: beige;
  display: inline;
  padding: 5px;
  border-radius: 10px;
}
</style>
