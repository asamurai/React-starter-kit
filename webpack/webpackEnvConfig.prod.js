import path from 'path';
import webpack from 'webpack';
import DirectoryNamedWebpackPlugin from 'directory-named-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    entry: [
        './src/index.js',
    ],
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new DirectoryNamedWebpackPlugin(),
        new webpack.NamedModulesPlugin(),   
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
