const PRIORITY = require('./priority');
const { createTask } = require('./task');

let list = {
  1: {
    title: 'Compras Mercado',
    description: 'Compras devem ser feitas no mercado continente',
    priority: PRIORITY.high,
    createdDate: new Date(),
    status: false,
  },
  2: {
    title: 'Limpar a casa',
    description: null,
    priority: PRIORITY.medium,
    createdDate: new Date(),
    status: false,
  },
};

function addTask(task) {
  list[Object.keys(list).length + 1] = task;
}

function getList() {
  return list;
}

function getTaskById(id) {
  return list[id];
}

function completeTask(id) {
  list[id].status = true;
}

function getCompletedList() {
  return Object.values(list).filter((task) => task.status === true);
}

function updateTask(id, title, priority, description, subTask) {
  list[id] = {
    title: title ? title : list[id].title,
    priority: priority ? priority : list[id].priority,
    description: description ? description : list[id].description,
    createdDate: list[id].createdDate,
    status: list[id].status,
  };
}

let task = createTask('New Task', PRIORITY.high, 'Levar o cão até o parque');
addTask(task);
completeTask(1);
completeTask(2);
updateTask(3, 'Passear Cão', PRIORITY.medium);
console.log(getList());
//console.log(getTaskById(2));
//console.log(getCompletedList());
