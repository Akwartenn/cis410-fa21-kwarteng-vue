import { createApp } from "vue";
import App from "./App.vue";
import axios from "axios";

import myRouter from "./routes.js";
import theStore from "./store.js";
axios.defaults.baseURL = "https://cis410-fa21-kwarteng-api.azurewebsites.net/";

const myApp = createApp(App);
myApp.use(myRouter);
myApp.mount("#app");
myApp.use(theStore);
