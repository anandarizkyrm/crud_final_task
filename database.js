const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('test_db', 'root', 'my-secret-pw', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;