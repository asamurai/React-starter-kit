import path from 'path';
import webpack from 'webpack';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

export default {
    entry: [
        './src/index.js',
    ],
    rules: [
        {
            test: /\.(scss|sass)$/,
            exclude: [/node_modules/,/production/],
            loader: ExtractTextPlugin.extract({
                fallback: 'style',
                use: ['css','sass']
            })  
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
        new webpack.NamedModulesPlugin(),
        new ExtractTextPlugin('style.css'),
        new HtmlWebpackPlugin({
            title: 'Project',
            template: path.resolve(__dirname, '../assets/views/index-template.ejs'),
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeRedundantAttributes: true,
                useShortDoctype: true,
                removeEmptyAttributes: true,
                removeStyleLinkTypeAttributes: true,
                keepClosingSlash: true,
                minifyJS: true,
                minifyCSS: true,
                minifyURLs: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}
