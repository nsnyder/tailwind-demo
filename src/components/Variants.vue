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
              p-12
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
            name: 'Focus',
            markup: `
            <input type="text"
              class="
                inline-block p-2 bg-gray-300
                text-gray-700 no-underline
                rounded-xl border-2 border-gray-500 focus:border-red-700 focus:border-4
                outline-none
            ">`
          },
          {
            name: 'Active',
            markup: `
            <a href="#"
              class="
                inline-block p-2 px-4
                bg-gray-300
                text-gray-800 no-underline
                rounded-md
                transform active:translate-y-1
                shadow-xl active:shadow-none
            ">Some Button</a>`
          },
          {
            name: 'Odd',
            markup: `
            <table class="w-full border">
              <tr class="odd:bg-gray-300"><td class="p-2">Item 1</td></tr>
              <tr class="odd:bg-gray-300"><td class="p-2">Item 2</td></tr>
              <tr class="odd:bg-gray-300"><td class="p-2">Item 3</td></tr>
              <tr class="odd:bg-gray-300"><td class="p-2">Item 4</td></tr>
              <tr class="odd:bg-gray-300"><td class="p-2">Item 5</td></tr>
            </table>`
          },
        ],
        resources: [
          {
            href: 'https://v1.tailwindcss.com/docs/pseudo-class-variants',
            name: 'Variants documentation'
          }
        ]
      };
    }
  }
</script>
