const{ Model, DataTypes} = require ('sequelize');




class Todo extends Model {
    static init(sequelize) {
        return super.init(
            {
                // id : {}, 기본적으로 생성해준다
                name : {
                    type : DataTypes.STRING(50),
                    allowNull : false
                }
            }, 
            {
                sequelize, 
                modelName : 'Todo',
                tableName : 'todos',
                charset : 'utf8mb4',
                collate : 'utf8mb4_general_ci'  
            })
    }
}

module.exports = {Todo}