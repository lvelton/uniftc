const { Sequelize } = require('sequelize');


const sequelize = new Sequelize('projeto_usuarios', 'root', 'SUA_SENHA', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
