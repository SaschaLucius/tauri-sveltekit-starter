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
		  
        ssr: false,
        vite: {
            ssr: {
                noExternal: true,
            }
        }
    }
};

export default config;