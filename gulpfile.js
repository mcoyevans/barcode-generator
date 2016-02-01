var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
		/* Vendor CSS */
		.styles('*', 'public/assets/css/vendor.css')
		/* App SCSS */
	    .sass('app.scss', 'public/assets/css/app.css')
		/* Vendor JS */
		.scriptsIn('public/assets/libs', 'public/assets/js/vendor.js')
		/* App Scripts */
		.scriptsIn('public/app', 'public/assets/js/app.js')
});
