import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  server: {
    port: 5000
  },
  build: {
    rollupOptions: {
      output: {
        // assetFileNames: '_extend/[name][extname]',
        assetFileNames: (assetInfo) => {
          const randomCode = [...Array(17)].map(() => (Math.random() < 0.5 ? String.fromCharCode(Math.floor(Math.random() * 26) + 97) : String(Math.floor(Math.random() * 10)))).join('');
          const parts = assetInfo.name.split('.');
          if(parts.length > 1) {
            if (assetInfo.name.endsWith('.css')) {
              return `_extend/css/${randomCode}.css`;
            }
            return `_extend/static/${randomCode}.${parts.pop()}`;
          }
        },
        chunkFileNames: '_extend/chunks/[name].[hash].js',
        entryFileNames: '_extend/chunks/renderer.js',
      }
    },
  },
  plugins: [svelte()],
})