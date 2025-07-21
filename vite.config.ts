import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["3xw7ys-5173.csb.app", "localhost", "7rfwj5-5173.csb.app"],
  },
});
