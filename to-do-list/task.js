const PRIORITY = require('./priority');

function createTask(title, priority = PRIORITY.low, description = null) {
  const today = new Date();
  return {
    title: title,
    description: description,
    priority: priority,
    createdDate: today,
    status: false,
  };
}

module.exports = { createTask };
