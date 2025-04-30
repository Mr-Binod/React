const express = require('express');
const cors = require("cors");



const app = express();
// 헤더에 값추가하고 next 다음미들웨어 호출
app.use(cors({
    origin : 'http://localhost:3000'
    // origin : '*'
}))
app.use(express.urlencoded({extended : false}))
app.use(express.json())



app.post("/login", (req, res) => { 
    const {body} = req
    console.log(body)
    setTimeout(() => {
        res.json({data : body})
    }, 3000)
})

// 포트 번호가 다르가 
// cors error should be handled
app.listen(4000, () => {
    console.log('server on~');
})