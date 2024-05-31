import { defineConfig } from 'vite';
import { resolve } from 'path';
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],  
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'boost-utils',
      fileName: (format) => `utils.${format}.js`,
      formats: ['es', 'umd'] // Ensure both ES and UMD formats are generated
    },
    rollupOptions: {
      external: ['lodash'], // Add other external dependencies here
      output: {
        globals: {
          lodash: '_'
        }
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  }
});
