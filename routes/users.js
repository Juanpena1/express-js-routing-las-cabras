const express = require('express');
const router = express.Router();

let users = []; 


router.get('/', (req, res) => {
  res.json(users);
});

router.post('/', (req, res) => {
  const { id, name, email, age } = req.body;
  users.push({ id, name, email, age });
  res.status(201).json({ message: 'Usuario creado', user: { id, name, email, age } });
});


router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});


router.put('/:id', (req, res) => {
  const { name, email, age } = req.body;
  const user = users.find(u => u.id === req.params.id);
  if (user) {
    user.name = name;
    user.email = email;
    user.age = age;
    res.json({ message: 'Usuario actualizado', user });
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

router.delete('/:id', (req, res) => {
  users = users.filter(u => u.id !== req.params.id);
  res.json({ message: 'Usuario eliminado' });
});

module.exports = router;