const PRIORITY = require('./priority');
const { createTask } = require('./task');

let list = {
  1: {
    description: 'Compras Mercado',
    details: 'Compras devem ser feitas no mercado continente',
    priority: PRIORITY.high,
    subTask: ['Comprar Arroz', 'Comprar Carne', 'Comprar Chocolate'],
    status: false,
  },
  2: {
    description: 'Limpar a casa',
    details: null,
    priority: PRIORITY.medium,
    subTask: ['Lavar a loiça', 'Varrer o chão', 'Lavar a roupa'],
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

function updateTask(id, description, priority, details, subTask) {
  list[id] = {
    description: description ? description : list[id].description,
    priority: priority ? priority : list[id].priority,
    details: details ? details : list[id].details,
    subTask: subTask ? subTask : list[id].subTask,
  };
}

let task = createTask('New Task');
addTask(task);
completeTask(1);
completeTask(2);
updateTask(3, 'Passear Cão', PRIORITY.medium, 'Andar no parque');
console.log(getList());
console.log(getTaskById(2));
console.log(getCompletedList());
