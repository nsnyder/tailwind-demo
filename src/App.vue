<template>
  <div id="app">
    <div @click="counter++">Counter! {{ counter }}</div>
    <!-- <component :is="component" /> -->
  </div>
</template>

<script>
  import purgeCss from '~/components/PurgeCSS.vue';

  export default {
    name: 'App',

    components: {
      
    },

    data() {
      return {
        demos: {
          'PurgeCSS': 'purge-css'
        },
        counter: 0
      };
    }
  }
</script>

<style src='./styles/main.css'></style>
