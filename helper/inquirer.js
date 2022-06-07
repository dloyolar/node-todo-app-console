const inquirer = require('inquirer');
require('colors');

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Que desea hacer?',
    choices: ['opt1', 'opt2', 'opt3'],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('======================='.green);
  console.log('Selecciona una opción'.green);
  console.log('=======================\n'.green);

  const opt = await inquirer.prompt(menuOptions);

  return opt;
};

module.exports = {
  inquirerMenu,
};
