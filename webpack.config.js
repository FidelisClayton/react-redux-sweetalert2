var webpack = require('webpack');

module.exports = {
    entry: './dev/index.js', // Arquivo principal da aplicação
    output: {
        path: './build/', // Pasta onde ficará o pacote gerado pelo webpack
        filename: 'app.bundle.js' // Nome do pacote gerado pelo webpack
    },
    module: {
        loaders: [
            {
                test: /.jsx?$/, // Verifica se o arquivo possui a extensão .jsx
                loader: 'babel-loader', // Loader responsável por converter JS ES6 para ES5
                exclude: /node_modules/, // Evita que o webpack leia os arquivos da pasta node_modules
                query: {
                    presets: ['es2015', 'react', 'stage-0'] // Informa ao babel que vamos utilizar a sintaxe do ES6 e do React
                }
            },
            {
                test: /.css$/,
                loader: 'style!css'
            }
        ]
    }
};