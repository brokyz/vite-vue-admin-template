import vue from '@vitejs/plugin-vue2'
import { resolve } from 'path'

export default {
  plugins: [vue()],
  base: './',
  resolve: {
    // 设置@为src目录
    alias: {
      '@': resolve(__dirname, './src'),
    },
    // 设置允许自动导入的后缀名文件
    extensions: ['.mjs', '.js', '.mts', '.ts', '.jsx', '.tsx', '.json', '.vue'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://mock.apifox.com/m1/4086383-0-default',
        changeOrigin: true,
      },
    },
  },
}
