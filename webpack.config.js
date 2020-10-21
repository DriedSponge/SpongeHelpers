const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: './src/index.ts',
    plugins: [new MiniCssExtractPlugin({filename:"SpongeHelpers.css"})],

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
                exclude: /node_modules/,
            }
        ],
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js','scss','css'  ],
    },
    optimization: {
        minimize: false,
    },
    output: {
        filename: 'SpongeHelpers.js',
        path: path.resolve(__dirname, 'dist'),
    },
};