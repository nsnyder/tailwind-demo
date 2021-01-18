<template>
  <div class="">
    <h2 class="text-4xl">About Tailwind</h2>
    <ul class="space-y-4">
      <li v-for="(note, index) in notes" class="card" :key="index">
        <h2 class="text-xl pb-2" v-text="note.title" />
        <div v-html="note.body" class="space-y-2" />
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'about-tailwind',

    data() {
      return {
        notes: [
          {
            title: 'What is Tailwind CSS?',
            body: 'Tailwind is a framework utility CSS, with an emphasis on writing reusable components.',
          },
          {
            title: "Why shouldn't I just use inline styles?",
            body: `<p>
                Using Tailwind's classes allows you to write more consistent styling. For instance,
                by using classes like <span class="font-mono">.bg-green-400</span>, you can avoid specifying
                a specific color over and over. Or by using <span class="font-mono">.font-mono</span> you
                can easily switch from Consolas, to Fira Code, or any other font, while your styles immediately
                update across your site.
              </p>
              <p>
                Inline styles also can't be written responsively. Tailwind's utility classes offer responsive
                variants to adapt to screen sizes quickly.
              </p>`,
          },
          {
            title: "Can I write custom CSS?",
            body: `Yes! Tailwind provides a bunch of tools to help you write custom CSS when you need it.
              When you write your own styles, you can either write utilities that can be reused, or write
              scoped CSS that is isolated to the component you're working on.`,
          },
        ]
      };
    }
  }
</script>

<style scoped>
  /* Note: I wouldn't actually recommend this, but it is a good demonstration of scoped CSS. */
  .card {
    @apply bg-gray-100 p-4 rounded-md shadow-sm;
  }
</style>
