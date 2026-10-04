import { defineConfig } from 'astro/config';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";
import playformCompress from "@playform/compress";

const base = "/bfp";

/** Prefixes root-relative links and images in Markdown (e.g., "/atlas" -> "/bfp/atlas") */
function rehypeBase() {
  const prefix = (url) =>
    typeof url === "string" && url.startsWith("/") && !url.startsWith("//") && !url.startsWith(base + "/")
      ? base + url
      : url;
  const visit = (node) => {
    if (node.type === "element") {
      if (node.tagName === "a") node.properties.href = prefix(node.properties.href);
      if (node.tagName === "img") node.properties.src = prefix(node.properties.src);
    }
    (node.children || []).forEach(visit);
  };
  return (tree) => visit(tree);
}

// https://astro.build/config
export default defineConfig({
  site: "https://germolinal.github.io",
  base,
  integrations: [playformCompress()],
  markdown: {
    rehypePlugins: [rehypeBase],
  },
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
