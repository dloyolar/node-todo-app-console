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

  addTask(desc = '') {
    const tarea = new Task(desc);
    this._list[tarea.id] = tarea;
  }
}

module.exports = Tasks;
