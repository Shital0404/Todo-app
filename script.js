function addTodo() {
  const input = document.querySelector('input');
  const task = input.value.trim();
  
  if (task === '') return;
  
  const todoList = document.getElementById('todo-list');
  
  const todoItem = document.createElement('div');
  todoItem.className = 'todo-item';
  todoItem.innerHTML = `
    <span>${task}</span>
    <button onclick="this.parentElement.remove()">Delete</button>
  `;
  
  todoList.appendChild(todoItem);
  input.value = '';
}

// Add button la click event dya
document.querySelector('button').addEventListener('click', addTodo);

// Enter dabaun suddha add hoil
document.querySelector('input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') addTodo();
});
