module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: false,
    mode: 'all',
    content: [
      './src/**/*.html',
      './src/**/*.vue',
      './src/**/*.js',
      './src/**/*.jsx',
    ],

    // These options are passed through directly to PurgeCSS.
    options: {
      whitelistPatterns: [
        /hljs-/,
        /[text|bg]-green-/,
        /^(text|bg)-green-\d{3}$/
      ],
      whitelist: [
        'col-span-1', 'col-span-2', 'col-span-3', 'col-span-4', 'col-span-5',
      ]
    }
  },
  theme: {
    extend: {
      gridTemplateRows: {
        '8': 'repeat(8, minmax(0, 1fr))',
      }
    },
  },
  variants: {
    'backgroundColor': ({ variants }) => [...variants('backgroundColor'), 'odd'],
    'borderColor': ({ variants }) => [...variants('borderColor'), 'focus'],
    'boxShadow': ({ variants }) => [...variants('boxShadow'), 'active'],
    'translate': ({ variants }) => [...variants('translate'), 'active']
  },
  // plugins: [],
}
