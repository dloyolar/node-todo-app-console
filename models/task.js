const { v4: uuidv4 } = require('uuid');

class Task {
  id = '';
  desc = '';
  finishedIn = null;

  constructor(desc) {
    this.id = uuidv4();
    this.desc = desc;
    this.finishedIn = null;
  }
}

module.exports = Task;
