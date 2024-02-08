require('../../config');
const Item = require('../../models/menu/item');

async function command() {
  const items = await Item.find({ category: 'Burritos' });

  const mapped = items.map((item) => {
    item.content.en.push('Rice');
    item.content.es.push('Arroz');

    return item;
  });

  mapped.forEach(async (el) => {
    await Item.findByIdAndUpdate(el._id, { content: el.content });
  });
}

command();
