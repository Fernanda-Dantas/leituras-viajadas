const path = require('path');

module.exports = {
    entry: './js/script.js',
    output: {
        path: path.resolve(__dirname, './'),
        filename: 'script.js',
    },
    module: {
        rules: [
            {
                teste: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],
                    },
                },
            },
        ],
    },
};