const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola mundo desde Express!');
});

app.get('/clientes', (req, res) => {
  const clientes = ['Carlos', 'Erickson', 'Andre'];
  res.json(clientes);
});

app.get('/productos', (req, res) => {
  const productos = ['Monitor', 'Teclado', 'Case CPU'];
  res.json(productos);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Servidor Express corriendo en el puerto ${PORT}`);
});
