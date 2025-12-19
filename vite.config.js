import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@services': path.resolve(__dirname, './src/services'),
      '@store': path.resolve(__dirname, './src/store'),
      '@utils': path.resolve(__dirname, './src/utils'),
    },
  },

  //Development server configuration
  server:{
    post:5173,
    open:true,
    strictPort:false,
  },

  //build configuration
  build:{
    outDir:'dist',
    sourcemap:false,
    rollupOptions:{
      output:{
        manualChunks:{
          'vendor':['react','react-dom', 'react-router-dom'],
          'ui':['framer-motion', 'zustand']
        }
      }
    }
  }
})
