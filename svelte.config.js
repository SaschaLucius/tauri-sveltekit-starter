import sveltePreprocess from 'svelte-preprocess';
import staticAdapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess({
		// in auto-preprocessing mode, you can set postcss: true if postcss-load-config is installed and svelte-preprocess will look for a PostCSS config file in your project.
		postcss: true
	}),

	kit: {
		adapter: staticAdapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		files: {
			template: 'src/app.html'
		},

		// disables server-side rendering app-wide
		ssr: false,
		// A Vite config object, or a function that returns one. Not all configuration options can be set, since SvelteKit depends on certain values being configured internally.
		vite: {
			ssr: {
				// bundle your SSR build into a single JavaScript file (Treat all dependencies as noExternal. Throw an error if any Node.js built-ins are imported)
				noExternal: true
			}
		}
	}
};

export default config;
