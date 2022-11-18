import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"

import "./icons"

import MajIcon from "./components/Maj-Kit/MajIcon.vue"
import MajContainer from "./components/Maj-Kit/MajContainer.vue"
import MajDivider from "./components/Maj-Kit/MajDivider.vue"

const app = createApp(App)

app.use(router)

app
  .component("MajIcon", MajIcon)
  .component("MajContainer", MajContainer)
  .component("MajDivider", MajDivider)

app.mount("#app")
