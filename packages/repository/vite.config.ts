import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'boost-repository',
      fileName: (format) => `repository.${format}.js`,
      formats: ['es', 'umd'] // Ensure both ES and UMD formats are generated
    },
    rollupOptions: {
      external: [
        'pinia',
        'vue',
      ], // Add other external dependencies here
      output: {
        globals: {
          vue: 'Vue',
          pinia: 'Pinia'
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
