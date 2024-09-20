const express = require('express');
const router = express.Router();

let products = []; 


router.get('/', (req, res) => {
  res.json(products);
});


router.post('/', (req, res) => {
  const { id, name, price, category } = req.body;
  products.push({ id, name, price, category });
  res.status(201).json({ message: 'Producto agregado', product: { id, name, price, category } });
});

router.get('/:id', (req, res) => {
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});


router.put('/:id', (req, res) => {
  const { name, price, category } = req.body;
  const product = products.find(p => p.id === req.params.id);
  if (product) {
    product.name = name;
    product.price = price;
    product.category = category;
    res.json({ message: 'Producto actualizado', product });
  } else {
    res.status(404).json({ message: 'Producto no encontrado' });
  }
});

// DELETE /products/:id
router.delete('/:id', (req, res) => {
  products = products.filter(p => p.id !== req.params.id);
  res.json({ message: 'Producto eliminado' });
});

module.exports = router;