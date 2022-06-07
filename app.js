require('colors');
const { inquirerMenu, pause, readInput } = require('./helper/inquirer');
const Tasks = require('./models/tasks');

const main = async () => {
  console.log('Hello World');

  let option = '';
  const tasks = new Tasks();

  do {
    option = await inquirerMenu();
    switch (option) {
      case '1':
        const desc = await readInput('Descripción:');
        tasks.addTask(desc);
        break;
      case '2':
        console.log(tasks._list);
        break;
    }

    await pause();
  } while (option !== '0');
};

main();
