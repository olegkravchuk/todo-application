var path = require('path');
var webpack = require('webpack');
var NpmInstallPlugin = require('npm-install-webpack-plugin');
var autoprefixer = require('autoprefixer');
var precss = require('precss');


var NODE_ENV = process.env.NODE_ENV;
var env = {
    production: NODE_ENV === 'production',
    staging: NODE_ENV === 'staging',
    test: NODE_ENV === 'test',
    development: NODE_ENV === 'development' || typeof NODE_ENV === 'undefined'
};

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, '../../static/todo-app/dist'),
        filename: 'bundle.js',
        publicPath: ''
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: env.development,
            __STAGING__: env.staging,
            __PRODUCTION__: env.production,
            __CURRENT_ENV__: '\'' + (NODE_ENV) + '\''
        }),
        new webpack.optimize.OccurenceOrderPlugin(true),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false
            },
            compress: {
                warnings: false,
                screw_ie8: true
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        })
    ],
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loaders: ['eslint'],
                include: [
                    path.resolve(__dirname, "../src")
                ]
            }
        ],
        loaders: [
            {
                loaders: ['react-hot', 'babel-loader'],
                include: [
                    path.resolve(__dirname, "../src")
                ],
                test: /\.js$/,
                plugins: ['transform-runtime']
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader!postcss-loader"
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                loader: 'file?name=public/fonts/[name].[ext]'
            }
        ]
    },
    postcss: function () {
        return [autoprefixer, precss];
    }

};
