/**
 * Vite Configuration
 * Configures build tool for React frontend
 *
 * Plugins:
 * - @vitejs/plugin-react: Enables Fast Refresh and JSX transformation
 */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Export configuration with React plugin enabled
export default defineConfig({
  plugins: [react()],
});
