require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(express.json());

// Importante: Usar el puerto asignado por Render
const PORT = process.env.PORT || 8000;

// Conexión a MongoDB
const MONGO_URI = process.env.MONGODB_URI;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));
} else {
  console.log('No se proporcionó MONGODB_URI en las variables de entorno');
}

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API de BarberHUB funcionando correctamente');
});

// ESCUCHAR EN EL PUERTO (Vital para que Node no se cierre)
app.listen(PORT, () => {
  console.log(`Servidor BarberHUB corriendo en el puerto ${PORT}`);
});