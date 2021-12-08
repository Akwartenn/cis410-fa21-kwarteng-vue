import { createStore } from "vuex";
import axios from "axios" ;
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
    storeRooms(state, rooms){
      state.rooms = rooms;
    }
  },
  actions: {
    getRooms({commit}) {
      axios.get("/rooms").then((aResponse) => {
        console.log("response in /rooms", aResponse);
        commit("storeRooms", aResponse.data);
      });
    },
  },
});
