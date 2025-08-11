import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// This configuration file tells Vite how to build the project.
// The key change here is the `base` option, which ensures relative paths.
export default defineConfig({
  // The 'base' option tells Vite to use relative paths for all assets.
  // This is crucial for a packaged Electron application, as it loads files
  // from the local filesystem using the file:// protocol.
  base: './',

  plugins: [
    react(),
  ],

  // Configure the build output directory
  build: {
    outDir: 'dist',
  },
})
