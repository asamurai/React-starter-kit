import path from 'path';

import config from './config';
import webpackEnvConfig from './webpack';

const webpackConfig = {
  entry: webpackEnvConfig.entry,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'eval-cheap-module-source-map',
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: webpackEnvConfig.plugins,
  module:{
    rules: webpackEnvConfig.rules
  },
	resolveLoader: {
		moduleExtensions: ['-loader']
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