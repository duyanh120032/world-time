import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      reactivityTransform: true,
    }),
    Components(),
    AutoImport({
      imports: ['vue', '@vueuse/core'],
      dirs: [
        './src/composables',
      ],
      vueTemplate: true,
    }),
    UnoCSS({
      shortcuts: {
        'border-base': 'border-gray/20 dark:border-gray/15',
      },
      presets: [
        presetUno(),
        presetAttributify(),
        presetIcons(),
      ],
    }),
  ],
})
