import adapter from "@sveltejs/adapter-static";
import { optimizeImports, optimizeCss, elements, icons } from "carbon-preprocess-svelte";

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: [
    optimizeImports(),
    elements(),
    icons()
  ],
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
    vite: {
      plugins: [process.env.NODE_ENV === "production" && optimizeCss()],
    },
  },
};
