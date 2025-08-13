import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === "production";

  return {
    // Important for GitHub Pages project sites
    base: isProd ? "/navs-apple-folio/" : "/",

    server: {
      host: "::",
      port: 8080,
    },

    plugins: [
      react(),
      !isProd && componentTagger(),
    ].filter(Boolean),

    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },

    build: {
      outDir: "dist",
      sourcemap: !isProd,
    },
  };
});
