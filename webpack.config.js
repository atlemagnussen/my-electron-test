var path = require('path');
var webpack = require('webpack');
var commondsChunkPlugin = webpack.optimize.CommondsChunkPlugin;

var module.export = {
    devtool: 'source-map',
    debug: true,
    entry: {
        'angular2': [
            'rxjs',
            'reflect-metadata',
            'angular2/core',
            'angular2/http'
        ],
        'app': './app/app'
    },
    output: {
        path: __dirname + '/build/',
        publicPath: 'build/',
        filename: '[name].js',
        sourceMapFilename: '[name].js.map',
        chunkFileName: '[id].chunk.js'
    },
    resolve: {
        extensions ['', '.ts', '.js', '.json', '.css', '.html']
    },
    module: {
        loaders: [
            {
                tests: /\.ts$/,
                loader: 'ts',
                exclude: [/node_modules/]
            }
        ]
    },
    plugins: [
        new CommondsChunkPlugin({name: 'angular2', filename: 'angular2.js', minChunks: Infinity}),
        new CommondsChunkPlugin({name: 'common', filename: 'common.js'}),
    ]
}