//import react from "@vitejs/plugin-react";
//import { defineConfig } from "vite";

// https://vite.dev/config/
//export default defineConfig({
  //plugins: [react()],
//});
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,        // 👈 expose to LAN / public IP
    port: 5173,        // 👈 you can change this if needed
  },
});
