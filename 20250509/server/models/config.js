const Sequelize = require('sequelize');
const {Todo} = require('./todo')


const sequelize = new Sequelize(
    'todolist',
    'root',
    '1994!BDs',
    {
        host : "127.0.0.1",
        port : 3306,
        dialect : 'mysql'
    }
)



const db = {
    Todo : Todo.init(sequelize),
}

module.exports = db

sequelize.sync({force : false}).then(() => {
    console.log('successful')
})