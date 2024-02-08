require('../../config');
const Item = require('../../models/menu/item');
const Platillo = require('../../models/menu/platillo');

async function command() {
  const items = await Item.find();

  const mapped = items.map((item) => {
    const content = item.content[0]
      .trim()
      .split(',')
      .map((el) => el.trim());
    content[content.length - 1] = content[content.length - 1].slice(1).trim();
    item.content = content;

    return item;
  });

  mapped.forEach(async (el) => {
    await Item.findByIdAndUpdate(el._id, { content: el.content });
  });
}

command();
