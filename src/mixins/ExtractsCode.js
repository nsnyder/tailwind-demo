import store from '~/store.js';

export default {
  data() {
    return {
      examinedFunctions: {}
    };
  },

  mounted() {
    this.loadMainCss();
  },

  methods: {
    functionToString(functionName, withName = true) {
      const functionString = this.examinedFunctions[functionName] || 'Unknown function';
      return this.codeToString(functionString, withName ? functionName : '')
    },
    codeToString(code, name) {
      // Split the code into individual lines.
      const parts = code.toString().split('\n');
      const lastLine = parts[parts.length - 1];

      // Count the spaces that need to be trimmed off the start.
      const excessSpaces = lastLine.length - lastLine.trimStart().length;

      // If we have a name, append it to the start.
      let starterText = '';
      if (name.length !== 0) {
        starterText = name + ': ' + parts.shift();
      }

      // Glue the lines together, avoiding leading blank lines.
      return parts.reduce((fullText, currentLine) => {
        let newLine = '\n';
        if (fullText.length === 0) {
          newLine = '';
        }
        return fullText + newLine + currentLine.substring(excessSpaces);
      }, starterText);
    },
    async loadMainCss() {
      // Don't reload this if we already have it.
      if (!!store.mainCss) {
        return;
      }
  
      // I couldn't find a good way to include the CSS directly, so this is the next best thing :)
      const response = await fetch('https://raw.githubusercontent.com/nsnyder/tailwind-demo/main/src/styles/main.css')
  
      store.mainCss = await response.text();
    },
    getRuleFromCss(selector) {
      const parts = store.mainCss.split('\n');

      let startFound = false;
      let endFound = false;
      return this.codeToString(parts.reduce((previous, current) => {
        if (current.includes(selector + ' {')) {
          startFound = true;
        }

        if (startFound && !endFound) {
          previous = previous + current + '\n';
        }

        if (startFound && current.includes('}')) {
          endFound = true;
        }

        return previous;
      }, ''), '');
    }
  },

  computed: {
    mainCss: function () {
      return store.mainCss;
    }
  }
};
