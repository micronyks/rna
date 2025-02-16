import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import ViteFonts from 'vite-plugin-fonts'

// https://vite.dev/config/
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: ['Source Sans 3', 'Roboto', 'Open Sans'] // Add your desired fonts here
      }
    })
  ],
  base: '/rna/', // This will need to be updated with your actual repository name
})