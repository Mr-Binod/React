const express = require('express')
const cors = require('cors')
const {Todo} = require('./models/config') 
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(cors({
    origin : '*'
}))

// todo list 조회
app.get('/read', async (req, res) => {
    try {
        
        const data = await Todo.findAll()
        setTimeout(() => {
            res.json({data, state : 200})
            
        }, 3000);
    } catch (error) {
        res.json({error})
        
    }
})

// todo list 추가
app.post('/create', async (req, res) => {
    try {
        const {name} = req.body;
        await Todo.create({name});
        res.json({message : '글 등록 성공', state : 200})
    } catch (error) {
        res.json(error)
    }
})

app.listen(4000, () => [
    console.log('server on~')
])