import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { viteMockServe } from 'vite-plugin-mock'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    target: 'es2015',
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src'),
      "components": path.resolve(__dirname, 'src/components'),
      "views": path.resolve(__dirname, 'src/views'),
      "routers": path.resolve(__dirname, 'src/routers'),
      "utils": path.resolve(__dirname, 'src/utils'),
    }
  },
  plugins: [vue(), viteMockServe({
    mockPath: 'mock',
    localEnabled: true,
    prodEnabled: true,
    injectCode: `
      import { setupProdMockServer } from '../mock/_createProductionServer';

      setupProdMockServer();
      `,
  })]
})
