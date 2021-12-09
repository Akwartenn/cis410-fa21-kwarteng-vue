import { createRouter, createWebHistory } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Rooms from "./components/Rooms.vue";
import RoomDetail from "./components/RoomDetail.vue";
import NotFound from "./components/NotFound.vue";
import ReviewCreate from "./components/ReviewCreate.vue";
import Signup from "./components/Signup.vue";
import Account from "./components/Account.vue";
import myStore from "./store.js";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    {
      path: "/account",
      component: Account,
      beforeEnter(to, from, next) {
        if (myStore.state.token) {
          next();
        } else {
          next("/login");
        }
      },
    },
    { path: "/login", component: Login },
    { path: "/rooms", component: Rooms },
    {
      path: "/rooms/:pk",
      component: RoomDetail,
      children: [{ path: "review", component: ReviewCreate }],
    },
    { path: "/signup", component: Signup },
    { path: "/:invalidroute(.*)", component: NotFound },
  ],
});

export default router;
