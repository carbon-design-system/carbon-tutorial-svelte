import adapter from '@sveltejs/adapter-static';
import * as carbon from 'carbon-preprocess-svelte';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: carbon.presetCarbon(),
  kit: {
    target: '#svelte',
    adapter: adapter(),
    vite: {
      optimizeDeps: { include: ['clipboard-copy'] },
      plugins: [process.env.NODE_ENV === 'production' && carbon.optimizeCss()],
    },
  },
};
