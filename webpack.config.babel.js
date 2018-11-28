import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ScriptExtHtmlWebpackPlugin from 'script-ext-html-webpack-plugin';
const { VueLoaderPlugin } = require('vue-loader');
export default {
    entry: path.join(__dirname, 'src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [{
            test: /\.js/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                loader: 'babel-loader'
            }]
        },
        {
            test: /\.css$/,
            use: [ 'vue-style-loader', 'css-loader' ]
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i, 
            loader: "file-loader?name=/public/icons/[name].[ext]"
        },      
        {
            test: /\.vue$/,
            use: 'vue-loader'
        }
    ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            title: 'Custom template',
            template: path.join(__dirname, 'src/index.template.html')
        }),
        new ScriptExtHtmlWebpackPlugin({
            defaultAttribute: 'defer'
        })
    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};