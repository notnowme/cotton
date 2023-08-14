import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:  {
    proxy: {
      '/3010': 'http://gjaischool-a.ddns.net:8447/proxy/'
    }
  },
  build: {
    rollupOptions: {
      assetsInclude: ['**/*.html'],
    }
  }
})
