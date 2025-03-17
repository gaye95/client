import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ["client-axu9.onrender.com"], 
    port: 5173,
    proxy: {
      "/api": {
        target: "https://server-eedk.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
