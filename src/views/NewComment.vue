<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newCommentParams: {},
      errors: [],
      birds: [],
      locations: [],
    };
  },
  created: function () {
    this.indexBirds();
    this.indexLocations();
  },
  methods: {
    setModal() {
      document.querySelector("#warning").showModal();
    },
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
    indexBirds: function () {
      axios.get("/birds").then((response) => {
        console.log(response.data);
        this.birds = response.data;
      });
    },
    indexLocations: function () {
      axios.get("/locations").then((response) => {
        console.log(response.data);
        this.locations = response.data;
      });
    },
  },
};
</script>

<template>
  <body class="comment-bg">
    <div class="add-comment">
      <button v-on:click="setModal()">Read Me!!</button>
      <form v-on:submit="submit()">
        <h1>Add Comment</h1>
        <ul>
          <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
        </ul>
        <div>
          <p>Guideline: Be specific as to help their ADVENTURE!</p>
          <br />
          <p>
            Example: Theres a "bluff or cave or whatever cool area" at "park name" where i saw "bird name" in "season".
          </p>
          <br />
          <label>Comment:</label>
          <input type="text" style="width: 1000px" v-model="newCommentParams.comment_text" />
        </div>
        <br />
        <div>
          <p>Guideline: Give longitide to the 5th decimal! It will be negative in the U.S. so dont forget the "-"</p>
          <br />
          <p>Example: Appalacian trailhead Springer Mountain, longitude: -84.19531</p>
          <br />
          <label>Longitude:</label>
          <input type="decimal" v-model="newCommentParams.long" />
        </div>
        <br />
        <div>
          <p>Guideline: Give Lattitude to the 5th decimal!</p>
          <br />
          <p>Example: Appalacian trailhead Springer Mountain, lattitude: 34.63746</p>
          <br />
          <label>Lattitude:</label>
          <input type="decimal" v-model="newCommentParams.lat" />
        </div>
        <br />
        <div>
          <p>Refer to chart Below for bird id #.</p>
          <br />
          <label>Bird Id:</label>
          <input type="int" style="width: 30px" v-model="newCommentParams.bird_id" />
        </div>
        <br />
        <div>
          <p>Refer to chart below for state id #.</p>
          <br />
          <label>State Id:</label>
          <input type="int" style="width: 30px" v-model="newCommentParams.location_id" />
        </div>
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <div class="row">
        <div class="column">
          <h2>Bird Id:</h2>
          <br />
          <div v-for="bird in birds" v-bind:key="bird.c_name">
            <br />
            <p>{{ bird.id }}: {{ bird.c_name }}</p>
          </div>
        </div>
        <div class="column">
          <h2>Location Id:</h2>
          <br />
          <div v-for="location in locations" v-bind:key="location.c_name">
            <br />
            <p>{{ location.id }}: {{ location.state }}</p>
          </div>
        </div>
      </div>
    </div>
    <dialog id="warning">
      <form class="warning-md" method="modal">
        <h1>Warning!</h1>
        <br />
        <p>This is a local spot comment page.</p>
        <br />
        <p>
          What this means is you are sharing a PUBLIC specific spot that you personally want to share with fellow
          adventurers.
        </p>
        <br />
        <p>
          As much as it would be great to reply to other Actual-Birders comments. This will result in your comment being
          removed. Our policy is that this is unsafe. Sorry Not Sorry.
        </p>
        <br />
        <p>Do NOT add any coordinates for any private property. These will be removed imediately!</p>
        <br />
        <p>
          Remeber familys and loved ones may use these spots. Any unsafe places(i.e. glass, beer cans, a million
          cigarette butts, ect. are deemed not safe.
        </p>
        <br />
        <p>Please dont add anything unsafe!</p>
        <br />
        <button>close</button>
      </form>
    </dialog>
  </body>
</template>

<style>
.add-comment {
  text-align: left;
  padding: 30px;
  font-family: "Tapestry", cursive;
}
.add-comment p {
  border: inset;
  border-radius: 10px;
  background-color: darkslategray;
  display: flex;
  display: inline;
}
.add-comment label {
  border: inset;
  border-radius: 10px;
  background-color: black;
}
.comment-bg {
  box-sizing: border-box;
}
.row {
  display: flex;
}

/* Create two equal columns that sits next to each other */
.comment-bg .column {
  flex: 50%;
  padding: 10px;
}
.comment-bg h2 {
  border: inset;
  border-radius: 10px;
  background-color: black;
  display: flex;
  display: inline;
}
.comment-bg .column p {
  padding: 5px;
}
.warning-md {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-image: url("https://freedesignfile.com/upload/2012/08/cb-11.jpg");
}
.warning-md p {
  background-color: yellow;
  display: inline;
  margin: 20px;
}
.warning-md h1 {
  border: inset;
  color: red;
  background-color: black;
}
.warning-md button {
  margin: 30px;
}
</style>
