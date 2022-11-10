import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./icons"

import MajIcon from "./components/Maj-Kit/MajIcon.vue"

const app = createApp(App)

app.use(router)

app
  .component("MajIcon", MajIcon)
  // .component('ComponentB', ComponentB)
  // .component('ComponentC', ComponentC)

app.mount("#app")
