const path = require('path');
const HtmlWebpackplugin = require('html-webpack-plugin');

const config = {
    entry:'./src/index.js',
    output: {
        path: path.join(__dirname,'/dist'),
        filename: 'index_bundle.js'
    },
    module:{
        rules:[
            {
                test: /\.js$/,
                exclude: /node_modules/, 
                use : {
                    loader:'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackplugin({
            template:'./src/index.html'
        })
    ]
}

module.exports = config;