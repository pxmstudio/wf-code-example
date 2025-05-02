import { defineConfig } from "vite";

export default defineConfig({
    server: {
        host: "localhost",
        cors: true,
        port: 5173,
        hmr: {
            host: "localhost",
            protocol: "ws",
        },
    },
    build: {
        minify: true,
        manifest: true,
        rollupOptions: {
            input: "./src/main.ts",
            output: {
                format: "umd",
                entryFileNames: "main.js",
                esModule: false,
                compact: true,
                globals: {
                    jquery: "$",
                },
            },
            external: ["jquery"],
        },
    },
});