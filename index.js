const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

let todos = JSON.parse(localStorage.getItem('todos')) || [];

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      ${todo}
      <button onclick="removeTodo(${index})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

function addTodo(e) {
  e.preventDefault();
  const todoText = input.value.trim();
  if (todoText) {
    todos.push(todoText);
    input.value = '';
    saveTodos();
    renderTodos();
  }
}

window.removeTodo = function(index) {
  todos.splice(index, 1);
  saveTodos();
  renderTodos();
}

form.addEventListener('submit', addTodo);

renderTodos();