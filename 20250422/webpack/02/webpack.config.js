const path = require('path');

module.exports = {
    entry : './src/index.js',
    mode : 'development',
    // 모듈을 가져올때 구칙
    module : {
        rules : [
            {
                // check filename
                // will check if file includes css
                // 어떤 로더로 이 파일을 읽을건지.
                // npm i style-loader css-loader
                test : /\.css$/,
                use : ["style-loader", "css-loader"]
                // use 사용하고 싶은 로더를 작성
                // "style-loader", "css-loader" : html 문서의 헤드에 style 태그를 추가하고 css 코드를 추가

            }
        ]
    },
    output : {
        filename : "bundle.js",
        path : path.join(__dirname, "dist")
    }
}