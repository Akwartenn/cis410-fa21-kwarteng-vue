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
  },
  actions: {
    getRooms() {
      axios.get("/rooms").then((myResponse) => {
        console.log("response in /rooms", myResponse);
      });
    },
  },
});
