export default {
  methods: {
    getBaseComputedExpression(computed) {
      const expression = this._computedWatchers[computed].expression.toString();
      const parts = expression.split('\n');
      const lastLine = parts[parts.length - 1];

      const excessSpaces = lastLine.length - lastLine.trimStart().length;

      return parts.reduce((fullText, currentLine) => {
        return fullText + '\n' + currentLine.substring(excessSpaces);
      }, computed + ': ' + parts.shift());
    }
  }
};
