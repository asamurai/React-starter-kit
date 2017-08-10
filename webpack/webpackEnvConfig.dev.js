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
    rules: [
        {
            enforce: 'pre',
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: 'eslint-loader'
        },
        {
            test: (/\.(scss|sass)$/), 
            use: ['style-loader','css-loader', 'sass-loader']
        },
        {
            test: (/\.(js|jsx)$/),
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

