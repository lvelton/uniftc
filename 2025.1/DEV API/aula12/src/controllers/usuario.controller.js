const usuarioService = require("../services/usuario.service");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

exports.buscarUsuarios = async (req, res) => {
  const usuarios = await usuarioService.listar();
  res.status(200).json(usuarios);
}

exports.cadastrarUsuario = async (req, res) => {
  const hashSenha = await bcrypt.hash(req.body.senha, 10);
  const usuario = await usuarioService.cadastrar(req.body.nome, req.body.email, hashSenha);
  res.status(201).json({mensagem:'Usuário Cadastrado', usuario});
}

exports.login = async(req, res) =>{
  const usuario = await usuarioService.buscarPorLogin(req.body.email);

  if (usuario) {
    const validaSenha = await bcrypt.compare(req.body.senha, usuario.senha);
    if(validaSenha){
      const token = jwt.sign({usuario}, process.env.CHAVE_SECRETA, {expiresIn:'1h'});
      res.status(200).json({mensagem: 'Olá, '+usuario.nome, token});
    }else{
      res.status(401).json({mensagem: "Senha inválida"});
    }

  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
}

exports.buscarUsuarioPorId = async (req, res) => {
  const usuario = await usuarioService.buscarPorId(req.params.id);
  if (usuario) {
    res.status(200).json(usuario);
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
}

exports.atualizarUsuario = async (req, res) => {
  const usuario = await usuarioService.atualizar(req.params.id, req.body);
  if (usuario) {
    res.status(200).json(usuario);
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
}

exports.deletarUsuario = async (req, res) => {
  const sucesso = await usuarioService.deletar(req.params.id);
  if (sucesso) {
    res.status(204).send();
  } else {
    res.status(404).json({ mensagem: 'Usuário não encontrado' });
  }
}
