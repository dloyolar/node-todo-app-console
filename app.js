require('colors');
const { inquirerMenu } = require('./helper/inquirer');

console.clear();

const main = async () => {
  console.log('Hello World');

  let option = '';

  do {
    option = await inquirerMenu();
    console.log({ option });
  } while (option !== '0');
};

main();
