// import createTaskContainer from "./task-container.js";
import createTaskContainer from './taskContainer.js';
import './style.css'

export default function showTasks() {
    const taskContainer = createTaskContainer();

    const task = document.createElement('div');
    task.innerHTML = 'Example tasks, make array of cards';
    taskContainer.appendChild(task);
}
