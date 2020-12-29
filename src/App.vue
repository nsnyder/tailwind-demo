<template>
  <div id="app" class="m-4">
    <div class="mb-8" @click="selectedIndex = index" v-for="(element, index) in demos" :key="index">
      {{ element.name }}
    </div>
    <div class="py-8">
      <component :is="selectedComponent.component" />
    </div>
  </div>
</template>

<script>
  import PurgeCss from '~/components/PurgeCSS.vue';

  export default {
    name: 'App',

    components: {
      PurgeCss,
    },

    data() {
      return {
        demos: [
          {
            name: 'PurgeCSS',
            component: 'purge-css'
          }
        ],
        selectedIndex: 0
      };
    },

    computed: {
      selectedComponent: function() {
        return this.demos[this.selectedIndex];
      }
    }
  }
</script>

<style src="./styles/main.css">
