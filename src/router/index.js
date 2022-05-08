import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import SignupView from "../views/SignupView.vue";
import LoginView from "../views/LoginView.vue";
import LogoutView from "../views/LogoutView.vue";
import BirdView from "../views/BirdView.vue";
import StateView from "../views/StateView.vue";
import StateIndView from "../views/StateIndView.vue";
import NewComment from "../views/NewComment.vue";
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
  { path: "/login", name: "login", component: LoginView },
  { path: "/logout", name: "logout", component: LogoutView },
  {
    path: "/birds/:id",
    name: "birds-view",
    component: BirdView,
  },
  {
    path: "/locations",
    name: "locations-view",
    component: StateView,
  },
  {
    path: "/locations/:id",
    name: "state-view",
    component: StateIndView,
  },
  {
    path: "/comments",
    name: "new-comment",
    component: NewComment,
  },
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
