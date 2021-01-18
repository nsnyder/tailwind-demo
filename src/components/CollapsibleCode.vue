<template>
  <div class="text-left text-gray-200 my-4">
    <a href="#" class="no-underline block hljs border-gray-500 border-b-2 p-4 text-lg" @click.prevent="hidden = !hidden">
      <span class="text-gray-800 rounded-full bg-white w-6 h-6 inline-flex place-content-center font-bold mr-4">
        {{ hidden ? '+' : '-' }}
      </span>
      {{ name }}
    </a>
    <div class="block hljs transition-all origin-top duration-200 scale-y-0 transform text-lg"
      :class="{ 'scale-y-100': !hidden, 'h-0': hidden }"
    >
      <highlightjs :language="language" :code="code" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CollapsibleCode',

    props: {
      code: String,
      language: {
        type: String,
        default: 'javascript',
      },
      name: String,
      hiddenByDefault: {
        type: Boolean,
        default: true,
      }
    },

    data() {
      return {
        hidden: this.hiddenByDefault
      };
    }
  }
</script>
