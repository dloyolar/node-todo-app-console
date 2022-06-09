require('colors');
const {
  inquirerMenu,
  pause,
  readInput,
  listOfTaskToDelete,
  confirm,
  showListCheckList,
} = require('./helper/inquirer');
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
      case '5':
        const ids = await showListCheckList(tasks.arrayList);
        tasks.toggleCompleted(ids);
        break;
      case '6':
        const id = await listOfTaskToDelete(tasks.arrayList);
        if (id === '0') continue;
        const ok = await confirm('Estás seguro?');
        if (ok) {
          tasks.deleteTask(id);
          console.log('Tarea borrada exitosamente'.yellow);
        }
        break;
    }

    saveDB(tasks.arrayList);

    await pause();
  } while (option !== '0');
};

main();
