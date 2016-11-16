var webpack = require('webpack');

module.exports = {
    entry: {
        app: './dev/index.js',
        index: './src/index.js'
    },
    output: {
        path: './build/',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /.css$/,
                loader: 'style!css'
            }
        ]
    }
};