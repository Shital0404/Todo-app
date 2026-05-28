let tasks = [];
let currentFilter = 'PENDING';

function addTask() {
    const taskText = document.getElementById('taskInput').value;
    const dueDate = document.getElementById('dateInput').value;
    if(taskText === '') return;

    tasks.push({ text: taskText, dueDate: dueDate, completed: false });
    document.getElementById('taskInput').value = '';
    document.getElementById('dateInput').value = '';
    displayTasks(currentFilter);
}

function toggleTask(index) {
    tasks[index].completed =!tasks[index].completed;
    displayTasks(currentFilter);
}

function filterTasks(filter) {
    currentFilter = filter;
    displayTasks(filter);
}

function displayTasks(filter) {
    const list = document.getElementById('todo-list');
    list.innerHTML = '';

    let filteredTasks = tasks;
    if(filter === 'pending') filteredTasks = tasks.filter(t =>!t.completed);
    if(filter === 'completed') filteredTasks = tasks.filter(t => t.completed);

    filteredTasks.forEach((task, index) => {
        const actualIndex = tasks.indexOf(task);
        list.innerHTML += `
        <div class="todo-item ${task.completed? 'completed' : ''}">
            <input type="checkbox" ${task.completed? 'checked' : ''} onclick="toggleTask(${actualIndex})">
            <span>${task.text}</span>
            ${task.dueDate? `<span class="due-date">Due: ${task.dueDate}</span>` : ''}
        </div>`;
    });
}
