const CracoLessPlugin = require('craco-less')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

module.exports = {
  webpack: {
    plugins: [new AntdDayjsWebpackPlugin()],
  },
  devServer: (devServerConfig) => {
    return {
      ...devServerConfig,
      compress: true,
      proxy: {
        '/api': {
          target: 'http://106.54.207.247:8086/',
          changeOrigin: true,
          xfwd: false,
        },
      },
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          modifyVars: { '@primary-color': '#1890ff' },
          javascriptEnabled: true,
        },
      },
    },
  ],
}
