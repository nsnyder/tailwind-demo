<template>
  <collapsible-code
    name="tailwind.config.js"
    :code="tailwindConfig"
    language="JSON"
    :hidden-by-default="false"
  />
</template>

<script>
  import CollapsibleCode from '~/components/CollapsibleCode.vue';
  import TailwindConfig from '../../tailwind.config.js';

  export default {
    name: 'TailwindConfig',

    components: {
      CollapsibleCode
    },

    data() {
      return {
        tailwindConfig: JSON.stringify(TailwindConfig, null, 2),
      };
    }
  }
</script>
