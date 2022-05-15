<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">ACTUAL-BURDZ</a>
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
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link" href="/comments">Share YO Local Spot!</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link" href="/requests">Request New Bird</a>
          </li>
          <li v-if="isLoggedIn" class="nav-item">
            <a class="nav-link" href="/migs">Recent Observations</a>
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
  <footer style="width: auto; background-color: #f7c201">
    <div class="row">
      <div class="column">
        <div class="row">
          <div class="column">
            <a href="https://ebird.org/home" target="_blank">
              <img
                src="https://s3.amazonaws.com/is-ebird-wordpress-prod-s3/wp-content/uploads/sites/55/logo-ebird-1200-490x276.png"
                alt=""
                width="200"
                height="100"
              />
            </a>
            <!-- <p>Some text..</p> -->
          </div>
          <div class="column">
            <a href="https://www.audubon.org/" target="_blank">
              <img
                src="https://www.developmentguild.com/assets/national-audubon-society-logo-e1569340135306.png"
                alt=""
                width="200"
                height="100"
              />
            </a>
            <!-- <p>Some text..</p> -->
          </div>
        </div>

        <div class="row">
          <div class="column">
            <a href="https://www.birdorable.com/" target="_blank">
              <img src="https://www.birdorable.com/img/sections/f/884.jpg" alt="" width="200" height="100" />
            </a>
            <!-- <p>Some text..</p> -->
          </div>
          <div class="column">
            <a href="https://www.birds.cornell.edu/home/" target="_blank">
              <img
                src="https://cdn.shopify.com/s/files/1/0255/3751/1523/products/CL_logo_stack_CMYK_1024x1024@2x.jpg?v=1580154653"
                alt=""
                width="200"
                height="100"
              />
            </a>
            <!-- <p>Some text..</p> -->
          </div>
        </div>
      </div>
      <div class="column"><h1>L.L.K.</h1></div>
      <div class="column">
        <div class="row">
          <div class="column">
            <a href="https://binocularsumo.com/reviews/under-100/" target="_blank">
              <img
                src="https://www.tripsavvy.com/thmb/GmdaianILgr0SkMZhzuIjpsZP2I=/640x0/filters:no_upscale():max_bytes(150000):strip_icc():gifv():format(webp)/TRIPSAVVY-13-best-binoculars-4061459-primary-2c2f4efe9e3b4e32b406d8c6291c53f3.jpg"
                alt=""
                width="200"
                height="100"
              />
            </a>
            <!-- <p>Some text..</p> -->
          </div>
          <div class="column">
            <a href="https://www.youtube.com/watch?v=xzuwSGE_HTU" target="_blank">
              <img
                src="https://kitchentablemagicdotorg.files.wordpress.com/2017/10/dev-sbmtg1.jpg?w=676&h=380"
                alt=""
                width="200"
                height="100"
              />
            </a>
            <!-- <p>Some text..</p> -->
          </div>
        </div>

        <div class="row">
          <div class="column">
            <a href="https://www.findlatitudeandlongitude.com/" target="_blank">
              <img
                src="https://www.thoughtco.com/thmb/a4fMjfbRVOQ2f5NsG6k-qEPAfPY=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/map-58b9d2665f9b58af5ca8b718-5b859fcc46e0fb0050f10865.jpg"
                alt=""
                width="200"
                height="100"
              />
            </a>
            <!-- <p>Some text..</p> -->
          </div>
          <div class="column">
            <a href="https://www.youtube.com/watch?v=gDAsuVxALAM" target="_blank">
              <img
                src="https://cdn.pixabay.com/photo/2020/08/12/17/42/question-mark-5483259_960_720.jpg"
                alt=""
                width="200"
                height="100"
              />
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="column"><h1>L.L.K. ent.</h1></div> -->
    </div>
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
  cursor: url("http://www.rw-designer.com/icon-image/12294-24x24x8.png"), auto;
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
.request-bg {
  background: url("https://www.enmu.edu/images/about/news-and-events/enmu-news/academic-news/legendary-bird-pokemon.jpg")
    no-repeat center center fixed;
  min-height: 100%;
  min-width: 100%;
  padding-bottom: 400px;
  background-size: 1400px;
}
.migs-bg {
  background: url("https://wallpx.com/image/2021/05/anime-boy-sky-birds-freedom-clouds-scenic-sunset.jpg") no-repeat
    center center fixed;
  min-height: 100%;
  min-width: 100%;
  padding-bottom: 800px;
  background-size: 1800px;
}
.login-bg {
  background: url("https://wallpapersmug.com/u/6d187b/birds-anime-boy-outdoor.jpg") no-repeat center center fixed;
  min-height: 100%;
  min-width: 100%;
  padding-bottom: 800px;
}
.signup-bg {
  background: url("https://www.wallpaperbetter.com/wallpaper/560/224/960/bird-clouds-person-720P-wallpaper.jpg")
    no-repeat center center fixed;
  min-height: 100%;
  min-width: 100%;
  padding-bottom: 600px;
  background-size: 2100px;
}
.bird-page {
  padding-bottom: 800px;
}

footer {
  /* padding: 6px; */
  /* grid-template-columns: repeat(3, minmax(0, 1fr)); */
  color: black;
  font-family: "Sriracha", cursive;
}
footer .column {
  flex: 33%;
  padding: 3px;
}
footer .img {
  border: inset;
  border-image: linear-gradient(45deg, turquoise, greenyellow) 1;
}
footer h1 {
  align-items: center;
  justify-content: center;
  font-size: 100px;
  margin-top: 20px;
}
/* footer .row outer {
  grid-template-columns: repeat(3, minmax(0, 1fr));
} */
/* footer .row {
  
} */
</style>
