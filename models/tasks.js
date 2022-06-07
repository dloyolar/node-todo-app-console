const Task = require('./task');

/**
 * _list: {'uuid-123-213-123-123-1: {id:12, finishedIn: 12312312}'}
 */

class Tasks {
  _list = {};

  constructor() {
    this._list = {};
  }

  addTask(desc = '') {
    const tarea = new Task(desc);
    this._list[tarea.id] = tarea;
  }
}

module.exports = Tasks;
