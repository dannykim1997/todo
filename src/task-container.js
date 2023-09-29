import displayBody from './index.js'
import './style.css'

export default function createTaskContainer() {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    taskContainer.innerHTML = 'container';

    displayBody.appendChild(taskContainer);
}

function showTasks() {
    
}