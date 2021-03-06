import vue from '@vitejs/plugin-vue'
const {resolve} = require('path');

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  alias: {
    'vue': 'vue/dist/vue.esm-bundler.js',
    '@' : resolve('/src'),
    'comps' : resolve('/src/components'),
    'assets' : resolve('/src/assets')
  },
  plugins: [vue()]
}
