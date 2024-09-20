const express = require('express');
const app = express();
const usersRoutes = require('./routes/users');
const productsRoutes = require('./routes/products');
const ordersRoutes = require('./routes/orders');

app.use(express.json());
app.use('/users', usersRoutes);
app.use('/products', productsRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: 'Ruta no encontrada' });
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
