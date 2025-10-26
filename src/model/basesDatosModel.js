const mongoose = require('mongoose');

const basesDatosSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  autores: { type: String, required: true },
  anioPublicacion: { type: Number, required: true },
  resumen: { type: String },
  cantidadReferencias: { type: Number },
  nombreBaseConsulta: { type: String },
  nombreRevistaLibro: { type: String },
  enlaceArticulo: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('BasesDatos', basesDatosSchema);
