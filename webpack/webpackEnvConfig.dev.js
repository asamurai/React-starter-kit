import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
import config from './../config';

export default {
    entry: [
        'react-hot-loader/patch',
        `webpack-dev-server/client?http://${config.devServer.host}:${config.devServer.port}`,
        'webpack/hot/only-dev-server',
        './src/index.js'
    ],
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new DirectoryNamedWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new HtmlWebpackPlugin({
            title: 'Project',
            template: path.resolve(__dirname, '../assets/views/index-template.ejs'),
            filename: 'index.html',
            hash: true
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
}

