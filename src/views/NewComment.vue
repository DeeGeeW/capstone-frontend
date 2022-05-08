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
        <label>Comment:</label>
        <input type="text" v-model="newCommentParams.comment_text" />
      </div>
      <div>
        <label>Longitude:</label>
        <input type="decimal" v-model="newCommentParams.long" />
      </div>
      <div>
        <label>Lattitude:</label>
        <input type="decimal" v-model="newCommentParams.lat" />
      </div>
      <div>
        <label>Bird Id</label>
        <input type="int" v-model="newCommentParams.bird_id" />
      </div>
      <div>
        <label>State Id</label>
        <input type="int" v-model="newCommentParams.location_id" />
      </div>
      <input type="submit" value="Submit" />
    </form>
  </div>
</template>
