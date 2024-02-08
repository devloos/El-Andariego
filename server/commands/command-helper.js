require('../config');

async function command(name, func, ...args) {
  console.log(`STARTING COMMAND: ${name}`);
  await func(...args);
  console.log(`ENDING COMMAND: ${name}`);
}

module.exports = command;
