<template>
  <div class="home" v-bind:style="{ backgroundImage: `url(${bird.background_url})` }">
    <div class="test" v-bind:style="{ backgroundImage: `url(${bird.background_url})` }" v-bind:key="bird.id"></div>
    <h1>{{ bird.c_name }}</h1>
    <!-- <p>c_name: {{ bird.c_name }}</p> -->
    <img v-bind:src="bird.image_url" v-bind:alt="bird.c_name" style="max-width: 250px" />
    <p>s_name: {{ bird.s_name }}</p>
    <p>description: {{ bird.description }}</p>
    <!-- <p>{{ bird.comments[0].comment_text }}</p> -->
    <!-- <div class="container">
      <p v-for="bird.comment in comments", v-text"comment"></p>
    </div> -->
    <router-link to="/" style="margin-right: 10px">Back to all birds</router-link>
    <div class="comment-box" v-for="comment in bird.comments" v-bind:key="comment.id">
      <p>{{ comment.comment_text }}</p>
      <p>{{ bird.c_name }}</p>
      <p>User ID:{{ comment.user_id }}</p>
      <p>{{ comment.lat }}</p>
      <p>{{ comment.long }}</p>
    </div>
    <!-- <router-link v-bind:to="`/birds/${bird.id}/edit`" style="margin-right: 10px">Edit bird</router-link> -->
    <!-- <button v-on:click="destroybird()">Delete</button> -->
  </div>
  <!-- </div> -->
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      bird: {},
      // comment: {},
    };
  },
  mounted: function () {
    console.log(this.$route.params.id);
    axios.get(`/birds/${this.$route.params.id}`).then((response) => {
      this.bird = response.data;
      console.log(this.bird);
    });
  },
  // function(index(num)) {
  //   while (num < bird.comments.length()) {
  //   return num;
  //   num++;
  //   }
  // }
  // console.log(index(0));
  // function (comments_i) {
  //   while (comments_i < bird.comments.length){
  //     return comments_i;
  //   }
  // }
  // console.log(0);
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
div .comment-box {
  border-style: inset;
  color: blue;
}
.test {
  height: 100px;
}
</style>
