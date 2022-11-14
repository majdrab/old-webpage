<template>
    <FontAwesomeIcon
        class="maj-icon"
        :icon="getIcon"
    />
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"

export default {
  name: "MajIcon",
  components: { FontAwesomeIcon },
  props: {
    icon: { type: [String, Array], default: "" },
    type: { type: String, default: "" }
  },
  computed: {
    getIcon () {
      if (Array.isArray(this.icon)) return this.icon
      return [ this.type, this.icon ]
    }
  }
}
</script>
