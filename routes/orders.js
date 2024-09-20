const express = require('express');
const router = express.Router();

let orders = []; 

router.get('/', (req, res) => {
  res.json(orders);
});

router.post('/', (req, res) => {
  const { id, userId, productId, quantity, status } = req.body;
  orders.push({ id, userId, productId, quantity, status });
  res.status(201).json({ message: 'Pedido creado', order: { id, userId, productId, quantity, status } });
});

router.get('/:id', (req, res) => {
  const order = orders.find(o => o.id === req.params.id);
  if (order) {
    res.json(order);
  } else {
    res.status(404).json({ message: 'Pedido no encontrado' });
  }
});

module.exports = router;
