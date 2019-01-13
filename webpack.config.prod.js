const webpack = require('webpack');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;


module.exports = merge(baseWebpackConfig, {
    mode: 'production',
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerHost: '127.0.0.1',
        analyzerPort: 8888
    }),
    new webpack.optimize.ModuleConcatenationPlugin()],
    optimization: {
        splitChunks: {
          cacheGroups: {
            vendor: {
              // 抽离第三方插件
              test: /node_modules/, // 指定是node_modules下的第三方包
              chunks: 'initial',
              name: 'vendor', // 打包后的文件名，任意命名
              // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
              priority: 10
            }
          }
        }
    }
});