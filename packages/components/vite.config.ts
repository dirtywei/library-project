import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
export default defineConfig({
  plugins: [
    vue(),
    dts({
      entryRoot: './src',
      outputDir: ['../dyest/es/src', '../dyest/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: '../../tsconfig.json'
    }),
    ,
    VueSetupExtend()
  ],
  build: {
    minify: 'esbuild', // boolean | 'terser' | 'esbuild'
    rollupOptions: {
      external: ['vue'], //忽略打包vue文件
      input: ['index.ts'],
      output: [
        {
          format: 'es', //打包格式
          entryFileNames: '[name].mjs', //打包后文件名
          preserveModules: true, //让打包目录和我们目录对应
          exports: 'named',
          dir: '../dyest/es' //配置打包根目录
        },
        {
          format: 'cjs', //打包格式
          entryFileNames: '[name].js', //打包后文件名
          preserveModules: true, //让打包目录和我们目录对应
          exports: 'named',
          dir: '../dyest/lib' //配置打包根目录
        }
      ]
    },
    lib: {
      entry: './index.ts'
    }
  },
  test: {
    environment: 'happy-dom'
  }
})
