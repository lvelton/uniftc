const express = require('express');
const App = express();
const usuarioRoutes = require('./src/routes/usuario.route');
const sequelize = require('./src/config/database');

App.use(express.json());
App.use('/usuario', usuarioRoutes);


sequelize.sync().then(() => {
  console.log("Banco de dados sincronizado");
  App.listen(3000, () => {
    console.log("Servidor rodando na porta 3000");
  });
}).catch((error) => {
  console.error("Erro ao conectar no banco:", error);
});
