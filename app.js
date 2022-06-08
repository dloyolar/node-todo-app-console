require('colors');
const { inquirerMenu, pause, readInput } = require('./helper/inquirer');
const { saveDB } = require('./helper/saveFile');
const Tasks = require('./models/tasks');

const main = async () => {
  let option = '';
  const tasks = new Tasks();

  do {
    option = await inquirerMenu();
    switch (option) {
      case '1':
        // Create Task
        const desc = await readInput('Descripción:');
        tasks.addTask(desc);
        break;
      case '2':
        console.log(tasks.arrayList);
        break;
    }

    // saveDB(tasks.arrayList);

    await pause();
  } while (option !== '0');
};

main();
