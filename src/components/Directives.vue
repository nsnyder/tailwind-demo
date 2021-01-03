<template>
  <div class="">
    <h2 class="text-4xl">Tailwind Directives</h2>
    <div class="border-t-2" v-for="(directive, index) in directives" :key="index">
      <collapsible-code :code="directive.cssSelector ? getRuleFromCss(directive.cssSelector) : directive.css"
        language="css"
        :name="directive.name"
      />
      <template v-if="directive.markup">
        <collapsible-code :code="directive.markup" language="html" :name="directive.markupName" />
        <div class="mt-2" v-html="directive.markup"></div>
      </template>
    </div>
  </div>
</template>

<script>
  import CollapsibleCode from '~/components/CollapsibleCode.vue';
  import ExtractsCode from '~/mixins/ExtractsCode.js';

  export default {
    name: 'Directives',

    components: {
      CollapsibleCode,
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
            name: '@apply',
            css: null,
            cssSelector: '.btn',
            markup: '<a class="btn" href="#">Some Button</a>',
            markupName: '.btn',
          }
        ]
      };
    }
  }
</script>