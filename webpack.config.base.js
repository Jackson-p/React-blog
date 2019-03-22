const path = require('path');
//const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        page: path.resolve(__dirname, 'src/js', 'root.js')
    },
    resolve:{
        alias:{
            '@': '../../../',
            axios:path.resolve(__dirname,'vendor/axios.min.js'),
            hljs:path.resolve(__dirname,'vendor/highlight.min.js'),
            marked:(__dirname,'vendor/marked.min.js')
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
      //publicPath简单说就是引用资源时的公共路径,注意写主js代码的时候都用相对路径。
      path: path.resolve(__dirname,'dist'),
      filename: "[name]-[hash:5].bundle.js",
      chunkFilename: "[name]-[hash:5].chunk.js"
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     axios: 'axios',
        //     hljs: 'highlight.js',
        //     marked: 'marked'
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template:'./index.html',
            chunks:['page'],
            minify: {
                collapseWhitespace: true
            }
        }),
        new CopyWebpackPlugin([
            {from:'./src/img/tith.ICO', to:'./'}
        ])
        ,
        new WorkboxPlugin.GenerateSW({
            swDest: 'sw.js',
            clientsClaim:true,
            skipWaiting:true,
            runtimeCaching:[{
              urlPattern: new RegExp('https://api.github.com'),
              handler: 'staleWhileRevalidate'
            }]
        })
    ]
};