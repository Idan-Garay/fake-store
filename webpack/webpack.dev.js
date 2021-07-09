const webpack = require('webpack')
const webpack = require('@pmmwh/react-refresh-webpack-plugin')

module.exports = {
    mode: 'development',
    devServer: {
        hot: true,
    },
    devtool: 'cheap-module-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.name': JSON.stringify('REACT-TS-WP'),
        })
    ],
}

