import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { createVuePlugin as vue } from 'vite-plugin-vue2';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
