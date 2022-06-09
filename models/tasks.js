require('colors');
const Task = require('./task');

/**
 * _list: {'uuid-123-213-123-123-1: {id:12, finishedIn: 12312312}'}
 */

class Tasks {
  _list = {};

  get arrayList() {
    const arr = [];
    Object.keys(this._list).forEach((key) => {
      const task = this._list[key];
      arr.push(task);
    });

    return arr;
  }

  constructor() {
    this._list = {};
  }

  deleteTask(id='') {
    if(this._list[id]) delete this._list[id]
  }

  loadTaskFromArray(tasks = []) {
    tasks.forEach((task) => (this._list[task.id] = task));
  }

  addTask(desc = '') {
    const tarea = new Task(desc);
    this._list[tarea.id] = tarea;
  }

  completedList() {
    this.arrayList.forEach((task, i) => {
      const index = `${i + 1}`.green;
      const { desc, finishedIn } = task;
      const status = finishedIn
        ? `${'Completada'}`.green
        : `${'Pendiente'}`.red;

      console.log(`\n${index}. ${desc} :: ${status}`);
    });
  }

  listCompletedTasks(completed = true) {
    console.log();
    const tasks = this.arrayList.filter((task) =>
      completed ? task.finishedIn : !task.finishedIn
    );

    tasks.forEach((task, i) => {
      const index = `${i + 1}`.green;
      const { desc, finishedIn } = task;
      const status = finishedIn ? `${finishedIn}` : `${'Pendiente'}`.red;

      console.log(`${index}. ${desc} :: ${status}`);
    });
  }
}

module.exports = Tasks;
