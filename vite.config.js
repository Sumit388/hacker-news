import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      '/@': resolve(__dirname, './')
    }
  },
  server: {
    proxy: {
      '/api': 'http://localhost:3000' // Assuming your Next.js API is running on port 3000
    }
  }
})
