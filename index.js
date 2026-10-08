require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// Usar el puerto de la variable de entorno que asigna Render, o 8000 por defecto en local
const PORT = process.env.PORT || 8000;

// Conexión a la base de datos usando la variable de entorno
const MONGO_URI = process.env.MONGODB_URI;

if (MONGO_URI) {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a MongoDB Atlas'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});