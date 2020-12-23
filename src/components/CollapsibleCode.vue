<template>
  <div class="text-left text-gray-200">
    <a href="#" class="block bg-gray-800 border-gray-500 border-b-2 p-4" @click="hidden = !hidden">
      {{ name }}
    </a>
    <code class="block bg-gray-800 transition-all origin-top duration-200 scale-y-0 transform text-lg"
      :class="{ 'scale-y-100 p-4': !hidden, 'h-0': hidden }"
    >
      <slot />
    </code>
  </div>
</template>

<script>
  export default {
    name: 'CollapsibleCode',

    props: {
      name: String,
      hiddenByDefault: {
        type: Boolean,
        default: true,
      }
    },

    data() {
      return {
        hidden: this.hiddenByDefault,
      };
    }
  }
</script>
