const { mix } = require('laravel-mix');
//require('laravel-elixir-webpack-react');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
  module: {
  loaders: [
    {
      loader: "babel-loader",

     // Only run `.js` and `.jsx` files through Babel
      test: /\.jsx?$/,

      // Options to configure babel with
      query: {
        plugins: ['transform-regenerator', 'syntax-async-functions'],
        presets: ['es2015', 'stage-0', 'react'],
      }
    },
  ]
}
});

mix.js('resources/assets/js/app.jsx', 'js/app.js');
