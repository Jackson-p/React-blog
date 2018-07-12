const path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/js/root.js',
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
                    loader:'babel-loader',
                    options: require('./babel.config')
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
        publicPath: '/'
    },
    plugins: [
        
    ]
};
