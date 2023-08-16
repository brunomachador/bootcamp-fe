const { input, rawlist, select } = require('@inquirer/prompts');

const todos = [
  {
    title: 'Limpar a casa',
    description:
      'Limpar a casa com vassoura e pano nos quartos, conzinha e casa de banho',
    priority: 'm',
    createdDate: getCurrrentDate(),
  },
  {
    title: 'Compras mercado',
    description:
      'Fazer as compras de carne, arroz, salada, bebidas e produtos de limpeza',
    priority: 'H',
    createdDate: getCurrrentDate(),
  },
];

function createTodo() {
  const todo = {};

  console.log('\n\nCreating a todo...');
  input({ message: 'Enter the title: ' }).then(function (title) {
    todo.title = title;

    input({ message: 'Enter the description: ' }).then(function (description) {
      todo.description = description;

      select({
        message: 'Select a priority',
        choices: [
          {
            name: 'Low',
            value: 'L',
          },
          {
            name: 'Medium',
            value: 'M',
          },
          {
            name: 'High',
            value: 'H',
          },
        ],
      }).then(function (priority) {
        todo.priority = priority;

        (todo.createdDate = getCurrrentDate()),
          // Add the new todo to the db file
          todos.push(todo);

        console.log('\n');

        renderMenu();
      });
    });
  });
}

function printTodos(list) {
  list.forEach(function (todo) {
    console.log('\n===============');
    console.log('Title: ' + todo.title);
    console.log('Desc: ' + todo.description);
    console.log('Priority: ' + todo.priority);
    console.log('Created: ' + todo.createdDate);
    console.log('===============\n');
  });
}

function listTodos() {
  printTodos(todos);
  renderMenu();
}

function sortByTitle() {
  const todosSortedByTitle = todos.sort((a, b) =>
    a.title.localeCompare(b.title)
  );
  printTodos(todosSortedByTitle);
  renderMenu();
}

function renderListMenu() {
  rawlist({
    message: 'Listing all todos',
    choices: [
      { name: 'List all', value: 'all' },
      { name: 'Sort by Title', value: 'sortTitle' },
      { name: 'Go back', value: 'back' },
    ],
  }).then(function (option) {
    switch (option) {
      case 'all':
        listTodos();
        break;
      case 'sortTitle':
        sortByTitle();
        break;
      case 'back':
        renderMenu();
        break;
      default:
        console.log('That is not a valid option');
    }
  });
}

function renderMenu() {
  rawlist({
    message: 'Bem vindo à TODO +',
    choices: [
      { name: 'Create a todo', value: 'create' },
      { name: 'List all todos', value: 'list' },
      { name: 'Exit', value: 'exit' },
    ],
  }).then(function (option) {
    switch (option) {
      case 'create':
        createTodo();
        break;
      case 'list':
        renderListMenu();
        break;
      default:
        console.log('That is not a valid option');
    }
  });
}

renderMenu();

function getCurrrentDate() {
  const day = new Date().getUTCDate();
  const month = new Date().getUTCMonth();
  const year = new Date().getUTCFullYear();
  const todaysDate = day + '/' + month + '/' + year;
  return todaysDate;
}
