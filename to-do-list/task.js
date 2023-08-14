const PRIORITY = require('./priority');

function createTask(
  description,
  priority = PRIORITY.low,
  details = null,
  subTask = []
) {
  return {
    description: description,
    details: details,
    priority: priority,
    subTask: subTask,
    status: false,
  };
}

module.exports = { createTask };
