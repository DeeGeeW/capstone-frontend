<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newCommentParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/comments", this.newCommentParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>

<template>
  <div class="add-comment">
    <form v-on:submit.prevent="submit()">
      <h1>Add Comment</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <p>Guideline: Be specific as to help their ADVENTURE!</p>
        <p>
          Example: Theres a "bluff or cave or whatever cool area" at "park name" where i saw "bird name" in "season".
        </p>
        <label>Comment:</label>
        <input type="text" v-model="newCommentParams.comment_text" />
      </div>
      <br />
      <div>
        <p>Guideline: Give longitide to the 5th decimal! It will be negative so dont forget the "-"</p>
        <p>Example: Appalacian Mountain trailhead Springer Mountain, longitude: -84.19531</p>
        <label>Longitude:</label>
        <input type="decimal" v-model="newCommentParams.long" />
      </div>
      <br />
      <div>
        <p>Guideline: Give Lattitude to the 5th decimal!</p>
        <p>Example: Appalacian Mountain trailhead Springer Mountain, lattitude: 34.63746</p>
        <label>Lattitude:</label>
        <input type="decimal" v-model="newCommentParams.lat" />
      </div>
      <br />
      <div>
        <p>Refer to chart Below for bird id.</p>
        <label>Bird Id:</label>
        <input type="int" v-model="newCommentParams.bird_id" />
      </div>
      <br />
      <div>
        <p>Refer to chart below for state id.</p>
        <label>State Id:</label>
        <input type="int" v-model="newCommentParams.location_id" />
      </div>
      <br />
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>

<style>
.add-comment {
  text-align: left;
  padding: 30px;
  background-image: url("https://wallpx.com/image/2020/11/lights-scenic-particles-anime-landscape-polychromatic.jpg");
  background-repeat: no-repeat;
  background-size: auto;
}
.add-comment p {
  /* white-space: nowrap; */
  /* overflow: hidden; */
  /* text-overflow: ellipsis; */
  border: inset;
  background-color: darkslategray;
  display: flex;
}
.add-comment label {
  border: inset;
  background-color: black;
}
</style>
