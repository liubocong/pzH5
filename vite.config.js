import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from '@vant/auto-import-resolver';
// https://vitejs.dev/config/
export default {
  server:{
    port:4500,
  },
  /*
  proxy: {
    '/v3pz': {
      target: 'https:/v3pz.itndedu.com/v3pz',
      changeOrigin: true,
      rewrite: (path) => path.replace(/^\/v3pz/, ''),
    },
  },
  */
  plugins: [
    vue(),
    AutoImport({
      resolvers: [VantResolver()],
    }),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
};

