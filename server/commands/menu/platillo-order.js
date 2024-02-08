const command = require('../command-helper');
const Platillo = require('../../models/menu/platillo');

command('test', async () => {
  const platillos = await Platillo.find({ name: { $ne: 'Camaron Alambre' } }, null, {
    sort: { name: 1 },
  });

  platillos.forEach((platillo, i) => {
    platillo.priority = i + 1;
    platillo.save();
  });
});
