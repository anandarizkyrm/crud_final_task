const Sequelize = require('sequelize')
const sequelize = require('./database')

class Tech extends Sequelize.Model{
    
};


Tech.init({
    name : Sequelize.STRING,
    kode : Sequelize.STRING,
    category : Sequelize.STRING
},{
    sequelize,
    freezeTableName : true,
    modelName : 'Tech',
    timestamps : false
})

module.exports = Tech;