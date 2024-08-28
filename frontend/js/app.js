const API_URL = 'http://localhost:5000/tasks';

function createTask() {
    const title = document.getElementById('task-title').value;
    const description = document.getElementById('task-desc').value;

    const task = { title, description };

    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then(response => response.json())
    .then(data => {
        alert('Task created!');
        loadTasks();
    });
}

function loadTasks() {
    fetch(API_URL)
    .then(response => response.json())
    .then(tasks => {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        tasks.forEach(task => {
            taskList.innerHTML += `<div>${task.title} - ${task.description} (${task.status})</div>`;
        });
    });
}

window.onload = loadTasks;
