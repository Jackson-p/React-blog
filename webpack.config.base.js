const path = require('path');
const UglifyJsPlugin=require('uglifyjs-webpack-plugin');


module.exports = {
    entry: path.resolve(__dirname, 'src/js', 'root.js'),
    optimization: {
        minimizer:[
            new UglifyJsPlugin({
                uglifyOptions:{
                    compress:true
                }
            })
        ]
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
                use:{
                    loader:'babel-loader'
                    //options: require('./babel.config')
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
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
        filename: 'bundle.js',
        path: path.resolve(__dirname,'./'),
        publicPath: '',
        // chunkFilename: "[name].js",
        // filename: "[name].js"
    },
    plugins: [
        
    ]
};