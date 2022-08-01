import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
// turnary function
axios.defaults.baseURL =
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://limitless-anchorage-31513.herokuapp.com/";

var jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

createApp(App).use(router).mount("#app");
