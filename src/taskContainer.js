import './style.css'
import displayBody from './index.js'
import createTaskForm from './taskForm.js';

const addTaskButton = document.createElement('button');
addTaskButton.classList.add('add-task-button');
addTaskButton.innerHTML = 'Add New Task';
addTaskButton.onclick = showTaskForm;

export default function createTaskContainer() {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    // taskContainer.innerHTML = 'container';

    displayBody.appendChild(addTaskButton);
    displayBody.appendChild(taskContainer);

    return taskContainer;
}

function disableTaskFormButton() {
    addTaskButton.disabled = true;
}

export function enableTaskFormButton() {
    addTaskButton.disabled = false;

    const taskForm = document.querySelector('.task-form');
    if (taskForm) {
        taskForm.remove();
    }
}

export function showTaskForm() {
    disableTaskFormButton();

    const taskForm = createTaskForm();
    displayBody.appendChild(taskForm);
    taskForm.style.display = 'block';

    console.log('add task clicked');
}