const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode:"development",
  entry: "./src/js/root.js",
//   context: path.join(__dirname),
//   devtool: debug ? "inline-sourcemap" : null,
  
  module: {

    rules: [
      {
        test: /\.js?$/,
        exclude: [
            path.resolve(__dirname,"node_modules")
        ],
        loader: 'babel-loader',
        options:{
            presets: ['react', 'es2015'],
            plugins:['react-html-attrs']

        }
      },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  output: {
    path: path.resolve(__dirname,"src/"),
    filename: "bundle.js",
    publicPath:"src"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};