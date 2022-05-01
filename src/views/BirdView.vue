<template>
  <div class="home">
    <h1>{{ bird.c_name }}</h1>
    <!-- <p>c_name: {{ bird.c_name }}</p> -->
    <img v-bind:src="bird.image_url" v-bind:alt="bird.c_name" style="max-width: 250px" />
    <p>s_name: {{ bird.s_name }}</p>
    <p>description: {{ bird.description }}</p>
    <!-- <div class="container">
      <p v-for="bird.comment in comments", v-text"comment"></p>
    </div> -->
    <router-link to="/" style="margin-right: 10px">Back to all birds</router-link>
    <!-- <router-link v-bind:to="`/birds/${bird.id}/edit`" style="margin-right: 10px">Edit bird</router-link> -->
    <!-- <button v-on:click="destroybird()">Delete</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      bird: {},
    };
  },
  created: function () {
    axios.get(`/birds/${this.$route.params.id}`).then((response) => {
      this.bird = response.data;
    });
  },
  // methods: {
  //   destroybird() {
  //     axios.delete(`/birds/${this.bird.id}`).then((response) => {
  //       console.log(response);
  //       this.$router.push("/birds");
  //     });
  //   },
  // },
};
</script>

<style>
/* div {
  background-image: url(bird.background_url);
} */
</style>
