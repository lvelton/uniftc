const usuarioService = require("../services/usuario.service");

exports.buscarUsuarios = async (req, res) => {
  const usuarios = await usuarioService.listar();
  res.status(200).json(usuarios);
}

exports.cadastrarUsuario = async (req, res) => {
  const usuario = await usuarioService.cadastrar(req.body.nome, req.body.email);
  res.status(201).json(usuario);
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
