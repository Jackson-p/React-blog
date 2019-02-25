const path = require('path');
// const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        page: path.resolve(__dirname, 'src/js', 'root.js')
    },
    resolve:{
        alias:{
            '@': '../../../'
        }
    },
    module:{
        rules:[
            {
                test:/\.html$/,
                use:[
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            },
            {
                test:/\.css$/,
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test:/\.js?$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname,'./src/js'),
                use:{
                    loader:'babel-loader'
                }
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                // include:path.resolve(__dirname,'./src/img'),
                // exclude: /node_modules/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                          name: '[name]-[hash:5].min.[ext]',
                          limit: 10000, // size <= 20KB
                          publicPath: 'static/',
                          outputPath: 'static/'
                        }
                    }
                ]
            }
        ]
    },
    output: {
      publicPath: '',
      path: path.resolve(__dirname,'dist'),
      filename: "[name]-[hash:5].bundle.js",
      chunkFilename: "[name]-[hash:5].chunk.js"
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     axios: 'axios',
        //     hljs: 'highlight.js',
        //     marked: 'marked'
        // })
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./index.html',
            chunks:['page'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new CleanWebpackPlugin(['dist'])
    ]
};