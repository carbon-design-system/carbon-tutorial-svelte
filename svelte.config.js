import adapter from "@sveltejs/adapter-static";
import * as carbon from "carbon-preprocess-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: carbon.presetCarbon(),
  kit: {
    adapter: adapter(),
    vite: {
      plugins: [process.env.NODE_ENV === "production" && carbon.optimizeCss()],
    },
  },
};
