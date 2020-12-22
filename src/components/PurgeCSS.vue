<template>
  <div class="text-center">
    <h1
      class="text-6xl font-mono transition-all duration-500"
      :class="colorClass"
    >
      {{ colorClass }}
    </h1>

    <div>
      <span class="inline-block max-w-4xl text-white font-bold text-3xl mt-4">
        <span class="inline-block rounded-l-full pl-8 px-4 py-6 bg-gray-700">Intensity</span>
        <a href="#"
          class="inline-block p-6 bg-red-700"
          @click.prevent="level = Math.max(level-1, 1)"
        >-</a>
        <a href="#"
          class="inline-block p-6 bg-blue-700 rounded-r-full"
          @click.prevent="level = Math.min(level+1, 9)"
        >+</a>
      </span>
    </div>

    <collapsible-code name="colorClass (computed property)">
      <pre>
colorClass: function() {
  const intensity = Math.min(Math.max(1, this.level), 9) * 100;
  return `text-red-${intensity}`; // PurgeCSS doesn't know to include all the text-red-* classes!
}
      </pre>
    </collapsible-code>
  </div>
</template>

<script>
import collapsibleCode from '~/components/CollapsibleCode.vue';
import CollapsibleCode from './CollapsibleCode.vue';

export default {
  name: 'PurgeCSS',

  components: {
    collapsibleCode
  },

  data() {
    return {
      level: 4,
    };
  },

  computed: {
    colorClass: function() {
      const intensity = Math.min(Math.max(1, this.level), 9) * 100;
      return `text-red-${intensity}`;
    }
  }
}
</script>
