const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/js/index.js',
    devtool: 'inline-source-map',
    devServer:{
        compress: true
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
                use:{
                    loader:'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                        plugins: [
                            '@babel/plugin-proposal-class-properties',
                            ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
                        ]
                    }
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
        publicPath:'./'
    },
    plugins: [
        
    ]
};
