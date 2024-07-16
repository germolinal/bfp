import { defineConfig } from 'astro/config';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [playformCompress()],
  vite: {
    plugins: [
      wasm(),
      topLevelAwait()
    ],
  },
  optimizeDeps: {
    exclude: [
      "@syntect/wasm"
    ]
  }
});