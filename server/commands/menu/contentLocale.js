require('../../config');
const Item = require('../../models/menu/item');
const Platillo = require('../../models/menu/platillo');

const map = {
  Chorizo: 'Sausage',
  Pollo: 'Chicken',
  Asada: 'Asada',
  Carnitas: 'Carnitas',
  Pastor: 'Pastor',
  Lengua: 'Lengua',
  Cabeza: 'Cow Head',
  Jamon: 'Ham',
  Milanesa: 'Breaded Asada',
  Salchicha: 'Sausage',
  Camaron: 'Shrimp',
  Tripa: 'Gut',
  Tocino: 'Bacon',
  Pechuga: 'Chicken Breast',
  Queso: 'Cheese',
  Crema: 'Sour Cream',
  Guacamole: 'Guacamole',
  Frijol: 'Beans',
  Cilantro: 'Cilantro',
  Cebolla: 'Onion',
  Lechuga: 'Lettuce',
  Tomate: 'Tomato',
  Agaucate: 'Avocado',
  Papas: 'Fries',
  Jalapeno: 'Jalapeno',
  Pina: 'Pineapple',
  Pimiento: 'Pepper',
  Tortillas: 'Tortillas',
  Champinones: 'Mushrooms',
  Arroz: 'Rice',
  'Selección De Carne': 'Meat Selection',
  'Chicken Nuggets': 'Chicken Nuggets',
};

async function command() {
  const items = await Item.find();

  const mapped = items.map((item) => {
    const content = {
      en: [],
      es: [],
    };

    item.content.forEach((ing) => {
      content.es.push(ing);
      content.en.push(map[ing]);
    });

    item.content = content;
    return item;
  });

  mapped.forEach(async (el) => {
    await Item.findByIdAndUpdate(el._id, { content: el.content });
  });
}

async function command2() {
  const platillos = await Platillo.find();

  const mapped = platillos.map((item) => {
    const content = {
      en: [],
      es: [],
    };

    item.content.forEach((ing) => {
      content.es.push(ing);
      content.en.push(map[ing]);
    });

    item.content = content;
    return item;
  });

  mapped.forEach(async (el) => {
    await Platillo.findByIdAndUpdate(el._id, { content: el.content });
  });
}

command();
command2();

console.log('running');
