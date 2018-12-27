const path = require('path');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.config.base');

const port = 8888;

module.exports = merge(baseWebpackConfig, {
        mode: 'development',
        devtool: 'inline-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, './'),//开发服务运行时的文件根目录
            host: 'localhost',
            port: port,
            inline: true,
            compress: true,
            stats: "errors-only",
            open: true//默认打开浏览器
        }
})