import { createStore } from "vuex";
import axios from "axios";
import myRoutes from "./routes.js";

export default createStore({
  state: {
    token: null,
    user: null,
    rooms: [],
  },
  mutations: {
    storeTokenInApp(state, myToken) {
      state.token = myToken;
    },
    storeUserInApp(state, theUser) {
      state.user = theUser;
    },
    storeRooms(state, rooms) {
      state.rooms = rooms;
    },
    clearAuthData(state) {
      state.token = null;
      state.user = null;
    } 
  },
  actions: {
    getRooms({ commit }) {
      axios.get("/rooms").then((aResponse) => {
        console.log("response in /rooms", aResponse);
        commit("storeRooms", aResponse.data);
      });
    },
    //problem with logout. ask professor
    logout({ commit, state }) {
      axios
        .post("/guests/logout", null, {
          headers: { Authorization: `Bearer ${state.token}`},
        })
        .then(() => {
          commit("clearAuthData");
          myRoutes.replace("/");
        })
        .catch(() => {
          console.log("error in logging out");
        });
    },
  },
});
