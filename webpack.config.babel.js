import webpack from 'webpack';
import path from 'path';

import config from './config';
import webpackEnvConfig from './webpack';

const webpackConfig = {
  entry: webpackEnvConfig.entry,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: webpackEnvConfig.plugins,
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
    port: config.devServer.port,
    open: true,
    openPage: '',
    inline: true,
    stats: 'minimal'
  }
};

module.exports = webpackConfig;