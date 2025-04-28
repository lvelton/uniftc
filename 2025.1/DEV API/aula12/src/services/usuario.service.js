const Usuario = require('../models/usuario.model');

exports.listar = async () => {
  return await Usuario.findAll();
}

exports.cadastrar = async (nomeUsuario, emailUsuario) => {
  const novoUsuario = await Usuario.create({
    nome: nomeUsuario,
    email: emailUsuario
  });
  return novoUsuario;
}

exports.buscarPorId = async (id) => {
  return await Usuario.findByPk(id);
}

exports.atualizar = async (id, dadosAtualizados) => {
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    await usuario.update(dadosAtualizados);
    return usuario;
  }
  return null;
}

exports.deletar = async (id) => {
  const usuario = await Usuario.findByPk(id);
  if (usuario) {
    await usuario.destroy();
    return true;
  }
  return false;
}
