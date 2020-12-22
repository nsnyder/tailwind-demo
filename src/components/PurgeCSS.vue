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
          @click.prevent="setLevel(level - 1)"
        >-</a>
        <a href="#"
          class="inline-block p-6 bg-blue-700 rounded-r-full"
          @click.prevent="setLevel(level + 1)"
        >+</a>
      </span>
    </div>

    <collapsible-code name="colorClass (computed property)">
      <pre>
{{ getBaseComputedExpression('colorClass') }}
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
      level: 5,
    };
  },

  computed: {
    colorClass: function() {
      const intensity = this.level * 100;

      // PurgeCSS doesn't know to automatically include `text-red-*`.
      return `text-red-${intensity}`;
    }
  },

  methods: {
    getBaseComputedExpression(computed) {
      const expression = this._computedWatchers[computed].expression.toString();
      const parts = expression.split('\n');
      const lastLine = parts[parts.length - 1];

      const excessSpaces = lastLine.length - lastLine.trimStart().length;

      return parts.reduce((fullText, currentLine) => {
        return fullText + '\n' + currentLine.substring(excessSpaces);
      }, computed + ': ' + parts.shift());
    },
    setLevel: function(newLevel) {
      this.level = Math.min(Math.max(1, newLevel), 9);
    }
  }
}
</script>
