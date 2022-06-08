require('colors');
const { inquirerMenu, pause, readInput } = require('./helper/inquirer');
const { saveDB, readDB } = require('./helper/saveFile');
const Tasks = require('./models/tasks');

const main = async () => {
  let option = '';
  const tasks = new Tasks();
  const tasksDB = readDB();

  if (tasksDB) {
    tasks.loadTaskFromArray(tasksDB);
  }

  do {
    option = await inquirerMenu();
    switch (option) {
      case '1':
        // Create Task
        const desc = await readInput('Descripción:');
        tasks.addTask(desc);
        break;
      case '2':
        tasks.completedList();
        break;
      case '3':
        tasks.listCompletedTasks();
        break;
      case '4':
        tasks.listCompletedTasks(false);
        break;
    }

    saveDB(tasks.arrayList);

    await pause();
  } while (option !== '0');
};

main();
