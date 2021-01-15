<template>
  <div>
    <h2 class="text-4xl">Tailwind Directives</h2>
    <div class="border-t-2 mt-2" v-for="(directive, index) in directives" :key="index">
      <collapsible-code :code="directive.cssSelector ? getRuleFromCss(directive.cssSelector) : directive.css"
        language="css"
        :name="directive.name"
      />
      <template v-if="directive.markup">
        <collapsible-code :code="directive.markup" language="html" :name="directive.markupName" />
        <div class="mt-2" v-html="directive.markup"></div>
      </template>
    </div>

    <resources-footer :resources="resources" />
  </div>
</template>

<script>
  import CollapsibleCode from '~/components/CollapsibleCode.vue';
  import ResourcesFooter from '~/components/ResourcesFooter.vue';
  import ExtractsCode from '~/mixins/ExtractsCode.js';

  export default {
    name: 'Directives',

    components: {
      CollapsibleCode,
      ResourcesFooter,
    },

    mixins: [
      ExtractsCode,
    ],

    data() {
      return {
        directives: [
          {
            name: '@tailwind',
            css: this.codeToString(`
              @tailwind base;
              @tailwind components;
              @tailwind utilities;
              @tailwind screens;`, ''),
            cssSelector: null,
            markup: '',
            markupName: '',
          },
          {
            name: '@apply (Tailwind classes)',
            css: null,
            cssSelector: '.btn',
            markup: '<a class="btn" href="#">Some Button</a>',
            markupName: '.btn',
          },
          {
            name: '@apply (Custom classes)',
            css: null,
            cssSelector: '.btn-hulk',
            markup: '<a class="btn-hulk" href="#">Some Button</a>',
            markupName: '.btn-hulk',
          },
          {
            name: '@variants',
            css: null,
            cssSelector: '@variants hover',
            markup: '<a class="btn hover:btn-hulk" href="#">Some Button</a>',
            markupName: '.hover:btn-hulk',
          },
          {
            name: '@responsive w/ @variants',
            css: null,
            cssSelector: 'Variants can use the @responsive',
            markup: '<a class="btn lg:hover:btn-hulk" href="#">Some Button</a>',
            markupName: '.lg:hover:btn-hulk',
          },
          {
            name: '@screen',
            css: null,
            cssSelector: '@screen lg',
            markup: '<a class="btn-scream" href="#">Screaming Button</a>',
            markupName: '.btn-scream',
          },
          {
            name: 'theme()',
            css: null,
            cssSelector: '.shadow-orange',
            markup: `<div class="shadow-orange bg-black text-white uppercase font-bold text-3xl rounded-lg inline-block p-8">
              Let's go Flyers!
            </div>`,
            markupName: '.shadow-orange',
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
