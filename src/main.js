import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./icons"

import MajIcon from "./components/Maj-Kit/MajIcon.vue"
import MajContainer from "./components/Maj-Kit/MajContainer.vue"

const app = createApp(App)

app.use(router)

app
  .component("MajIcon", MajIcon)
  .component("MajContainer", MajContainer)
  // .component('ComponentC', ComponentC)

app.mount("#app")
