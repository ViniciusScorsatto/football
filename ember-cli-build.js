/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        enabled: true,
        plugins: [
          require('tailwindcss')('./tailwind.config.js'),
          require('autoprefixer'),
          // Add other PostCSS plugins as needed
        ],
      },
    },
  });

  return app.toTree();
};
