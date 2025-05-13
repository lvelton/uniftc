const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USUARIO, process.env.DB_SENHA, {
  host: 'localhost',//Seu host
  dialect: 'mysql'//SGBD
});

module.exports = sequelize;
