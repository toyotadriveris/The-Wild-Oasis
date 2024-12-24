import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";

import { config } from "dotenv";

config();
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
});
