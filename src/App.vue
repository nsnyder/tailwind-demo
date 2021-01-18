<template>
  <div id="app" class="m-4">
    <ul class="space-x-2 mb-4 flex flex-wrap place-content-center">
      <li
        class="inline-block mb-2"
        v-for="(element, index) in demos"
        :key="index"
      >
        <a :href="'#' + element.name"
          class="rounded-full bg-green-300 py-2 px-4 no-underline text-green-900 inline-block"
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
  import AboutTailwind from '~/components/AboutTailwind.vue';
  import Demo from '~/components/Demo.vue';
  import Directives from '~/components/Directives.vue';
  import Notes from '~/components/Notes.vue';
  import PurgeCss from '~/components/PurgeCSS.vue';
  import Variants from '~/components/Variants.vue';

  export default {
    name: 'App',

    components: {
      AboutTailwind,
      Demo,
      Directives,
      Notes,
      PurgeCss,
      Variants,
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
            name: 'Variants',
            component: 'variants',
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
            name: 'Demo',
            component: 'demo'
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
