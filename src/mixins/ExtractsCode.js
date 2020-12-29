export default {
  data() {
    return {
      examinedFunctions: {}
    };
  },

  methods: {
    functionToString(func) {
      const functionString = this.examinedFunctions[func] || 'Unknown function';
      const parts = functionString.toString().split('\n');
      const lastLine = parts[parts.length - 1];

      const excessSpaces = lastLine.length - lastLine.trimStart().length;

      return parts.reduce((fullText, currentLine) => {
        return fullText + '\n' + currentLine.substring(excessSpaces);
      }, func + ': ' + parts.shift());
    }
  }
};
