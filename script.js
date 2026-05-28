let tasks = [];
let currentFilter = 'pending';

function addTask() {
    const taskText = document.getElementById('taskInput').value;
    const time = document.getElementById('timeInput').value;
    if(taskText === '') return;

    tasks.push({ text: taskText, time: time, completed: false });
    document.getElementById('taskInput').value = '';
    document.getElementById('timeInput').value = '';
    displayTasks(currentFilter);
}

function toggleTask(index) {
    tasks[index].completed =!tasks[index].completed;
    displayTasks(currentFilter);
}

function deleteTask(index) {
    tasks.splice(index, 1);
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
        let deleteBtn = '';
        if(task.completed) {
            deleteBtn = `<button onclick="deleteTask(${actualIndex})" style="margin-left:10px; background:red; padding:5px 10px;">Delete</button>`;
        }

        list.innerHTML += `
        <div class="todo-item ${task.completed? 'completed' : ''}">
            <input type="checkbox" ${task.completed? 'checked' : ''} onclick="toggleTask(${actualIndex})">
            <span>${task.text}</span>
            ${task.time? `<span class="time">Time: ${task.time}</span>` : ''}
            ${deleteBtn}
        </div>`;
    });
}
