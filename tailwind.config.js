module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
    ],

    // These options are passed through directly to PurgeCSS.
    options: {
      whitelistPatterns: [
        /text-red-/
      ],
      // whitelist: [
      //   'text-red-100', 'text-red-200', 'text-red-300', 'text-red-400', 'text-red-500', 'text-red-600', 'text-red-700', 'text-red-800', 'text-red-900'
      // ]
    }
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
