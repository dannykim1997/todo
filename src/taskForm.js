import './style.css'
import { enableTaskFormButton } from './taskContainer.js';

export default function createTaskForm() {
    const taskForm = document.createElement('div');
    taskForm.classList.add('task-form');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.setAttribute('for', 'task-title');
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'task-title';
    titleInput.name = 'task-title';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.setAttribute('for', 'task-description');
    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'task-description';
    descriptionInput.name = 'task-description';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    dueDateLabel.setAttribute('for', 'task-dueDate');
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'task-dueDate';
    dueDateInput.name = 'task-dueDate';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.setAttribute('for', 'task-priority');
    const priorityInput = document.createElement('select');
    priorityInput.id = 'task-priority';
    priorityInput.name = 'task-priority';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Project';

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = enableTaskFormButton;

    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);
    taskForm.appendChild(descriptionLabel);
    taskForm.appendChild(descriptionInput);
    taskForm.appendChild(dueDateLabel);
    taskForm.appendChild(dueDateInput);
    taskForm.appendChild(priorityLabel);
    taskForm.appendChild(priorityInput);
    taskForm.appendChild(addButton);
    taskForm.appendChild(cancelButton);

    return taskForm
}