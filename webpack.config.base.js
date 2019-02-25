const path = require('path');
// const webpack = require('webpack');

module.exports = {
    entry: {
        page: path.resolve(__dirname, 'src/js', 'root.js')
    },
    resolve:{
        alias:{
            '@': '../../../',

        }
    },
    module:{
        rules:[
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
                test: /\.(png|jpg|gif)$/,
                include:path.resolve(__dirname,'./src/img'),
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            name:'[path][name].[ext]'
                        }
                    }
                ]
            }
        ]
    },
    output: {
      publicPath: __dirname + '/dist/',
      path: path.resolve(__dirname,'dist'),
      filename: "[name].bundle.js",
      chunkFilename: "[name].chunk.js"
    },
    plugins: [
        // new webpack.ProvidePlugin({
        //     axios: 'axios',
        //     hljs: 'highlight.js',
        //     marked: 'marked'
        // })
    ]
};