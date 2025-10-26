const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require('dotenv').config();

const basesDatos = require('./src/routes/basesDatos');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Rutas
app.use('/api/baseDatos', basesDatos);

// Conexión a la base de datos
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Conexión exitosa a MongoDB'))
  .catch((error) => console.log('❌ Error al conectar:', error));

// Conexión al puerto
app.listen(port, () => {
  console.log(`🔥 Servidor corriendo en puerto ${port}`);
});