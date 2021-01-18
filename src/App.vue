<template>
  <div id="app" class="m-4">
    <ul class="space-x-2">
      <li
        class="inline-block"
        v-for="(element, index) in demos"
        :key="index"
      >
        <a :href="'#' + element.name"
          class="mb-8 rounded-full bg-green-300 py-2 px-4 no-underline text-green-900"
          @click="selectedIndex = index"
        >
          {{ element.name }}
        </a>
      </li>
    </ul>
    <div class="py-8 container m-auto">
      <component :is="selectedComponent.component" />
    </div>
  </div>
</template>

<script>
  import Directives from '~/components/Directives.vue';
  import Notes from '~/components/Notes.vue';
  import PurgeCss from '~/components/PurgeCSS.vue';
  import AboutTailwind from '~/components/AboutTailwind.vue';

  export default {
    name: 'App',

    components: {
      Directives,
      Notes,
      PurgeCss,
      AboutTailwind,
    },

    mounted() {
      let foundIndex = this.demos.findIndex(value => value.name === window.location.hash.substring(1));
      if (foundIndex === -1) {
        foundIndex = 0;
      }

      this.selectedIndex = foundIndex;
    },

    data() {
      return {
        demos: [
          {
            name: 'About Tailwind',
            component: 'about-tailwind',
          },
          {
            name: '@directives',
            component: 'directives',
          },
          {
            name: 'PurgeCSS',
            component: 'purge-css'
          },
          {
            name: 'Notes',
            component: 'notes'
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
