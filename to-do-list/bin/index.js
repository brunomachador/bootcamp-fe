const { input, rawlist, select } = require('@inquirer/prompts');

function createTodo() {
  const todo = {};
  console.log('\n\nCreating a todo....');

  input({ message: 'Enter title' }).then(function (title) {
    todo.title = title;
    input({ message: 'Enter description' }).then(function (description) {
      todo.description = description;
      select({
        message: 'Select Priority',
        choices: [
          { name: 'Low', value: 'L' },
          { name: 'Medium', value: 'M' },
          { name: 'High', value: 'H' },
        ],
      });
    });
  });
}

function renderMenu() {
  rawlist({
    message: 'Bem vindo à TODO',
    choices: [
      { name: 'Create TODO', value: 'create' },
      { name: 'List TODO', value: 'list' },
      { name: 'Exit', value: 'exit' },
    ],
  }).then(function (option) {
    switch (option) {
      case 'create':
        createTodo();
        break;
      default:
        console.log('Invalid option');
    }
  });
}

renderMenu();
