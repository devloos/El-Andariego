const { Router } = require('express');
const Item = require('../../models/item');

const router = Router();

router.get('/:category', async (req, res) => {
  const category = req.params.category;
  if (!category) throw new Error('Category has to be provided');

  try {
    const query = await Item.find({ category });
    if (!query.length) throw new Error(`Category: ${category} not found`);
    res.status(200).json(query);
  } catch (err) {
    res.status(404).send(err.message);
  }
});

module.exports = router;
