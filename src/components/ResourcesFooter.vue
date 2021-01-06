<template>
  <div class="mt-4">
    <h3 class="text-lg font-bold">More resources:</h3>
    <ul>
      <li v-for="(resource, index) in resources" :key="index">
        <a :href="resource.href" v-text="resource.name" target="_blank"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'ResourcesFooter',

    props: {
      resources: {
        type: Array,
        required: true,
      }
    }
  }
</script>
