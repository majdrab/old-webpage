<template>
    <!-- <header>
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

        <div class="wrapper">
            <nav>
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="/about">About</RouterLink>
            </nav>
        </div>
    </header> -->
    
    <NavigationBar />
    <RouterView />
</template>

<script>
import { RouterLink, RouterView } from "vue-router"

import NavigationBar from "@/components/NavigationBar.vue"

export default {
  components: { NavigationBar },
  data () {
    return {
      
    }
  },
  // methods: {
  //   setupShards: function() {

  //     this.shards = [];

  //     for (var i = 0; i < this.NUM_SHARDS; i++) {
  //       this.shards.push(this.setupShard(i));
  //     }
  //   },

  //   setupShard: function(index) {

  //     var shard = new ShardView(
  //       {
  //         index  : index,

  //         width  : 100,
  //         height : 100
  //       });

  //     shard.generate();

  //     return shard;
  //   },
  // }
}
</script>

<style lang="scss">
@import '@/styles/index.scss';
</style>