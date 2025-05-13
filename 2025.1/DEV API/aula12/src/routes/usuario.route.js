const express = require('express');
const router = express.Router();
const autenticacao = require('../config/autenticacao')

const usuarioController = require('../controllers/usuario.controller');

router.get('/', autenticacao, usuarioController.buscarUsuarios);
router.post('/', autenticacao,usuarioController.cadastrarUsuario);
router.get('/:id', autenticacao,usuarioController.buscarUsuarioPorId);
router.put('/:id', usuarioController.atualizarUsuario);
router.delete('/:id', usuarioController.deletarUsuario);
router.post('/login', usuarioController.login);

module.exports = router;
