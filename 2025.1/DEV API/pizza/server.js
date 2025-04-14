const express = require('express');
const app = express();
app.use(express.json());

let pedido = [];
let idAtual = 1;


app.get('/pedido', (req, res) => {
  res.json(pedido);
});

app.get('/pedido/:id', (req, res) => {
    const { id } = req.params;
    const ped = pedido.find(p => p.id == id);
  
    if (!ped) {
      return res.status(404).json({ erro: 'Pedido não encontrado' });
    }
  
    res.json(ped);
  });


app.post('/pedido', (req, res) => {
  const { cliente, sabor, tamanho, bordaRecheada, status } = req.body;

  if (!cliente || !sabor || !tamanho) {
    return res.status(400).json({ erro: 'Campos obrigatórios: cliente, sabor e tamanho' });
  }

  const novoPedido = {
    id: idAtual++,
    cliente,
    sabor,
    tamanho,
    bordaRecheada: !!bordaRecheada,
    status: status ||'Em preparação'
  };

  pedido.push(novoPedido);
  res.status(201).json(novoPedido);
});

app.put('/pedido/:id', (req, res) => {
  const { id } = req.params;
  const { cliente, sabor, tamanho, bordaRecheada, status} = req.body;

  const index = pedido.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ erro: 'Pedido não encontrado' });

  pedido[index] = {
    id: Number(id),
    cliente,
    sabor,
    tamanho,
    bordaRecheada: !!bordaRecheada,
    status
  };

  res.json(pedido[index]);
});


app.patch('/pedido/:id', (req, res) => {
  const { id } = req.params;
  const index = pedido.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ erro: 'Pedido não encontrado' });

  pedido[index] = { ...pedido[index], ...req.body };
  res.json(pedido[index]);
});


app.delete('/pedido/:id', (req, res) => {
  const { id } = req.params;
  const index = pedido.findIndex(p => p.id == id);
  if (index === -1) return res.status(404).json({ erro: 'Pedido não encontrado' });

  pedido.splice(index, 1);
  res.status(204).send();
});


app.listen(3000, () => {
  console.log('Servidor de pedidos de pizza rodando na porta 3000');
});
