const inquirer = require('inquirer');
require('colors');

const menuOptions = [
  {
    type: 'list',
    name: 'option',
    message: 'Que desea hacer?',
    choices: [
      { value: '1', name: '1. Crear tarea' },
      { value: '2', name: '2. Mostrar tarea' },
      { value: '3', name: '3. Mostrar tareas completadas' },
      { value: '4', name: '4. Mostrar tarea pendientes' },
      { value: '5', name: '5. Completar tarea(s)' },
      { value: '6', name: '6. Borrar tarea' },
      { value: '0', name: '0. Salir' },
    ],
  },
];

const inquirerMenu = async () => {
  console.clear();
  console.log('======================='.green);
  console.log('Selecciona una opción'.green);
  console.log('=======================\n'.green);

  const { option } = await inquirer.prompt(menuOptions);

  return option;
};

const pause = async () => {
  const question = [
    {
      type: 'input',
      name: 'enter',
      message: `Presione ${'ENTER'.green} para continuar`,
    },
  ];
  console.log('\n');
  await inquirer.prompt(question);
};

module.exports = {
  inquirerMenu,
  pause,
};
