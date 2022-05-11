<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">ACTUAL-BURDZ</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link" href="/signup">Sign Up</a>
          </li>
          <li v-if="!isLoggedIn" class="nav-item">
            <a class="nav-link" href="/login">Login</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link" href="/logout">Log Out</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/locations">Search by State</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/comments">Share YO Local Spot!</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/requests">Request New Bird</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <nav>
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
  </nav> -->
  <router-view />
  <footer style="height: auto; background-color: #f7c201">
    <h1>L.L.K. ent.</h1>
  </footer>
</template>
<script>
export default {
  data: function () {
    return {
      isLoggedIn: false,
    };
  },
  watch: {
    $route: function () {
      this.isLoggedIn = !!localStorage.jwt;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: goldenrod;
}

nav {
  padding: 30px;
  font-family: Rubik Bubbles;
}
body {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  font-family: "Tapestry", cursive;
}
.nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.home-bg {
  background: url("https://img3.goodfon.com/original/1680x1050/0/2c/art-canarinu-kmes-paren-les.jpg") no-repeat center
    center fixed;
  min-height: 100%;
  min-width: 100%;
  color: goldenrod;
  padding-bottom: 800px;
}
.home-bg h1 {
  border-style: inset;
  background-color: black;
}
.state-bg {
  background: url("https://w.wallha.com/ws/2/WEtncSuB.jpg") no-repeat center center fixed;
  min-height: 100%;
  min-width: 100%;
  padding-bottom: 800px;
}
.state-bg h1 {
  border-style: inset;
  background-color: goldenrod;
}
.comment-bg {
  background: url("https://cache.desktopnexus.com/cropped-wallpapers/2370/2370548-1680x1050-[DesktopNexus.com].jpg?st=mISdrvGwb05gZ8yldIk7OQ&e=1652146372")
    no-repeat center center fixed;
  min-height: 100%;
  min-width: 100%;
  color: goldenrod;
}

footer {
  padding: 60px;
  color: black;
  font-family: "Sriracha", cursive;
}
</style>
