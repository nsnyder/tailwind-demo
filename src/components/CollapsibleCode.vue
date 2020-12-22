<template>
  <div class="text-left">
    <div @click="hidden = !hidden">{{ name }}</div>
    <code class="block transition-all origin-top duration-200 scale-y-0 transform"
      :class="{ 'scale-y-100': !hidden, 'h-0': hidden }"
    >
<slot />
    </code>
  </div>
</template>

<script>
export default {
  name: 'CollapsibleCode',

  props: {
    name: String
  },

  data() {
    return {
      hidden: true
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
