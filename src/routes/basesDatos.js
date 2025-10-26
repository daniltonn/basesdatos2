const express = require('express');
const router = express.Router();
const BasesDatos = require('../model/basesDatosModel');

// Crear
router.post('/', async (req, res) => {
  try {
    const nuevo = new BasesDatos(req.body);
    const guardado = await nuevo.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Leer todos
router.get('/', async (req, res) => {
  try {
    const data = await BasesDatos.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Leer por ID
router.get('/:id', async (req, res) => {
  try {
    const data = await BasesDatos.findById(req.params.id);
    if (!data) return res.status(404).json({ msg: 'No encontrado' });
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Actualizar
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await BasesDatos.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Eliminar
router.delete('/:id', async (req, res) => {
  try {
    await BasesDatos.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Registro eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
