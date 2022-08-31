const express = require('express');
const Category = require('../../models/category');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = await Category.find({ name: { $ne: 'Platillos' } });
    if (!query.length) throw new Error('No categories found');
    res.status(200).json(query);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

router.get('/platillos', async (req, res) => {
  try {
    const query = await Category.find({ name: 'Platillos' });
    if (!query.length) throw new Error('Category: Platillos was not found');
    res.status(200).json(query);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
