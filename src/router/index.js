import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SignupView from "../views/SignupView.vue";
// import SignupView from "../views/SignupView.vue";
// import LoginView from "../views/LoginView.vue";
// import BirdIndex from "../views/BirdIndex.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: AboutView,
  },
  { path: "/signup", name: "signup", component: SignupView },
  // {
  //   path: "/signup",
  //   name: "signup",
  //   component: SignupView,
  // },
  // {
  //   path: "/login",
  //   name: "login",
  //   component: LoginView,
  // },

  // { path: "/birds", name: "bird", component: BirdIndex },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
