<template>
  <div class="">
    <h2 class="text-4xl">Some notes!</h2>
    <ul class="grid grid-cols-1 lg:grid-cols-3 gap-2">
      <li v-for="(note, index) in notes" class="bg-gray-100 p-2 rounded-md shadow-sm" :key="index" v-html="note" />
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Notes',

    data() {
      return {
        notes: [
          `Did you change <span class="font-mono">tailwind.config.js</span>?
            Restart your <span class="font-mono">watch</span>!`,
          `The <span class="font-mono">transform</span> class is required in <em>addition</em> to things like
            <span class="font-mono">scale-150</span>, <span class="font-mono">rotate-45</span>,
            <span class="font-mono">translate-x-4</span>, etc. Tailwind uses CSS variables to accomplish transforms,
            and classes like <span class="font-mono">translate-x-4</span> just set that variable.`,
          `Make sure you're looking at the correct documentation! Tailwind CSS v2 is out, but we're still using v1.
            <a href="https://v1.tailwindcss.com">Tailwind CSS v1</a>
            <a href="https://tailwindcss.com">Tailwind CSS v2</a>`,
          `<h3 class="font-bold text-lg">Common gotchas:</h3>
            <ul class="space-y-1 pt-1">
              <li>PurgeCSS</li>
              <li>Config not setup as expected</li>
              <li>Tailwind not up to date with documentation</li>
              <li>Responsive classes/pseudo selectors (hover, active, focus, etc.) don't work with Tailwind CSS v1</li>
            </ul>`,
          `<h3 class="font-bold text-lg">Plugins!</h3>
            <ul class="space-y-1 pt-1">
              <li><a href="https://plugins.jetbrains.com/plugin/15321-tailwind-css">PhpStorm</a></li>
              <li><a href="https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss">
                Visual Studio Code
              </li></a>
            </ul>`,
            `Need to test something quickly? Check out the
              <a href="https://play.tailwindcss.com/ejpHvWDhCD">Tailwind Playground</a>`
        ]
      };
    }
  }
</script>
