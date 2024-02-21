import { defineConfig } from "vite";
import react from '@vitejs/plugin-react-swc'
import path from "path";

export default defineConfig({
  envDir: "./env",
  root: path.resolve('./'),
  plugins: [react() 
  ],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    port: 3000,
    host: "0.0.0.0",
    watch: {
      usePolling: true,
    },
  },
});