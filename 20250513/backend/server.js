const express = require('express');
const cors = require('cors');


const app = express()

app.use(cors({origin : '*'}))
app.use(express.json());
app.use(express.urlencoded({extended: false}));

let count = 0;

app.get('/getCount', (req, res) => {
    setTimeout(() => {
        
        res.json({count});
    }, 2000);
})
app.post('/setCount', (req, res) => {
    const {incrementCount} = req.body;
    count += incrementCount;
    res.json({message : '증가 황료'})
})

const list = [
    {id : 1},
    {id : 2},
    {id : 3},
    {id : 4},
    {id : 5},
    {id : 6},
    {id : 7},
]

app.get('/getList/:index', (req, res) => {
    const {index} = req.params;
    // 몊개씩 보여줄건지
    const listviewCount = 2;
    
    // 페이지의 해당하는 변호의 아이템 시작접 계산
    const startIndex = parseInt(index - 1) * listviewCount;
    // 페이지의 해당하는 아이탬들을 잘라서 반환
    const pageList = list.slice(startIndex, startIndex + listviewCount)
    res.json({pageList})
})


app.listen(4000, () => {
    console.log('server.on')
})