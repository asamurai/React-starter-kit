const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:8080`,
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Project',
      template: path.resolve(__dirname, 'assets/views/index-template.ejs'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: true
      },
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ],
  module:{
    rules:[
      {
        test: (/\.sass$/ || /.\scss$/), 
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: (/\.js$/ || /\.jsx$/),
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.json$/,
        use: 'json-loader'
      },
			{
				test: /\.(jpe?g|png|gif|svg|ico)$/i,
				use: 'file-loader?name=[name].[ext]'
			}
    ]
  },
  devServer:{
    historyApiFallback: true,
    hot: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 8080,
    open: true,
    openPage: '',
    inline: true,
    stats: 'minimal'
  }

};

module.exports = webpackConfig;