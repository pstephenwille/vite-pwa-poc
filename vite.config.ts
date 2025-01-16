import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const serverConfig ={
  host: 'pwa-poc.dev',
  port: 3003,
  https: {
      key: 'pwa-poc.dev-key.pem',
      cert: 'pwa-poc.dev.pem',
    }
}

// https://vitejs.dev/config/
export default defineConfig({
  server: serverConfig,
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: 'auto',

    manifest: {
      name: 'vite-pwa-poc',
      short_name: 'vite-pwa-poc',
      description: 'dev playground for pwa',
      theme_color: '#ffffff',

      icons: [{
        src: 'pwa-64x64.png',
        sizes: '64x64',
        type: 'image/png',
      }, {
        src: 'pwa-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      }, {
        src: 'pwa-react-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      }, {
        src: 'maskable-icon-768x512.png',
        sizes: '768x512',
        type: 'image/png',
        purpose: 'maskable',
      }],
      screenshots: [
        {
          "src": "desktop-sshot.narrow.png",
          "type": "image/png",
          "sizes": "540x861",
          "form_factor": "narrow"
        },
        {
          "src": "desktop-sshot.wide.png",
          "type": "image/png",
          "sizes": "720x457",
          "form_factor": "wide"
        }
      ]
    },

    workbox: {
      globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})
