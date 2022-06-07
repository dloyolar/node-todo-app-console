require('colors');
const { inquirerMenu, pause } = require('./helper/inquirer');

console.clear();

const main = async () => {
  console.log('Hello World');

  let option = '';

  do {
    option = await inquirerMenu();
    console.log({ option });
    await pause();
  } while (option !== '0');
};

main();
