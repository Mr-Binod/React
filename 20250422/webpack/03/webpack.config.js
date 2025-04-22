const path = require('path')
const htmlWebpack = require('html-webpack-plugin');


module.exports = {
    entry : "./src/index.js",
    mode : "development",

    module : {
        rules : [
            {
                // includes filename contains js or jsx
                test : /\.(js|jsx|css)$/,
                // exclude file
                exclude : /node_modules/,
                use : ["babel-loader"]
            },
            {       
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    // 기본 html 생성
    // htmlwebpackplugin
    plugins : [
        new htmlWebpack({
            template : "src/index.html",
            filename : "index.html"
        })
    ],
    output : {
        filename : "bundle.js",
        path : path.join(__dirname, 'dist')
    }
}