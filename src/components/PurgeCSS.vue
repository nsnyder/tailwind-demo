<template>
  <div>
    <h1
      class="text-4xl"
      :class="colorClass"
    >
      PurgeCSS is great, but there are some things to learn!
    </h1>

  </div>
</template>

<script>
export default {
  name: 'PurgeCSS',

  props: {
    msg: String
  },

  data() {
    return {
      level: 0,
    };
  },

  computed: {
    colorClass: function() {
      const intensity = Math.min(Math.max(0, this.level), 9) * 100;
      return `text-red-${intensity}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
