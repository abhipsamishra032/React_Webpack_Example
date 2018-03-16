var path = require("path"),
    webpack = require("webpack"),
    HTMLWebPackPlugin = require("html-webpack-plugin"),
    ExtraTextWbpackPlugin = require("extract-text-webpack-plugin"),
    MiniCSSWbpackPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        main: "./src/index.jsx"
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'app.bundle.js'
    },
    plugins: [
        new HTMLWebPackPlugin({
           title: "React Webpack",
           template: "./index.html",
           chunksSortMode: 'dependency'
        }),
        new MiniCSSWbpackPlugin({
            filename: "index.css",
            chunkFilename:"[id].css"
        })
    ],
    module: {
        rules: [
            {
                test:/\.jsx$/,
                include: path.join(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            },
            {
                test:/\.less$/,
                include: path.join(__dirname, 'src/css'),
                use: [
                    MiniCSSWbpackPlugin.loader,
                    "css-loader", "less-loader"
                ]
            }
        ] 
    }
    
};