<template>
  <div>
    <h2 class="text-4xl">Variants</h2>
    <div class="border-t-2 mt-2" v-for="(variant, index) in variants" :key="index">
      <collapsible-code :code="codeToString(variant.markup, '')"
        language="html"
        :name="variant.name"
      />
      <div v-html="variant.markup" />
    </div>

    <resources-footer :resources="resources" />
  </div>
</template>

<script>
  import CollapsibleCode from '~/components/CollapsibleCode.vue';
  import ResourcesFooter from '~/components/ResourcesFooter.vue';
  import ExtractsCode from '~/mixins/ExtractsCode';

  export default {
    name: 'Directives',

    components: {
      CollapsibleCode,
      ResourcesFooter,
    },

    mixins: [
      ExtractsCode
    ],

    data() {
      return {
        variants: [
          {
            name: 'Hover',
            markup: `
            <div class="
              bg-red-600 hover:bg-green-600
              text-white text-4xl font-bold
              duration-500
              w-full p-12
            ">
              Hover me!
            </div>`,
          },
          {
            name: 'Responsive',
            markup: `
            <div class="
              grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5
            ">
              <div class="bg-red-500 h-20 w-20"></div>
              <div class="bg-orange-500 h-20 w-20"></div>
              <div class="bg-yellow-500 h-20 w-20"></div>
              <div class="bg-green-500 h-20 w-20"></div>
              <div class="bg-blue-500 h-20 w-20"></div>
              <div class="bg-indigo-500 h-20 w-20"></div>
              <div class="bg-purple-500 h-20 w-20"></div>
            </div>`,
          },
          {
            name: 'Active',
            markup: `
            <a href="#"
              class="
                inline-block p-4 bg-red-300
                border border-red-700 active:border-4 active:border-gray-800
            ">
              Some Link
            </a>`
          }
        ],
        resources: [
          {
            href: 'https://v1.tailwindcss.com/docs/functions-and-directives',
            name: 'Directives documentation'
          },
          {
            href: 'https://v1.tailwindcss.com/docs/pseudo-class-variants',
            name: 'Predefined variants'
          }
        ]
      };
    }
  }
</script>
