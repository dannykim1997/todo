import './style.css'
import { enableTaskFormButton } from './taskContainer.js';
import { myProjects } from './showProjects.js';
import { createTask } from './showTasks';

export default function createTaskForm() {
    let taskForm = document.createElement('div');
    taskForm.classList.add('task-form');

    let titleLabel = document.createElement('label');
    titleLabel.textContent = 'New Task:';
    titleLabel.setAttribute('for', 'task-title');
    let titleInput = document.createElement('input');

    titleInput.type = 'text';
    titleInput.id = 'task-title';
    titleInput.name = 'task-title';

    let dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    dueDateLabel.setAttribute('for', 'task-due-date');
    let dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'task-due-date';
    dueDateInput.name = 'task-due-date';

    let priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    priorityLabel.setAttribute('for', 'task-priority');
    let prioritySelect = document.createElement('select');
    prioritySelect.id = 'task-priority';
    prioritySelect.name = 'task-priority';

    let priorityOptions = ['High', 'Medium', 'Low'];

    priorityOptions.forEach((priority) => {
        let option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        prioritySelect.appendChild(option);
    });

    let projectLabel = document.createElement('label');
    projectLabel.textContent = 'Project:';
    projectLabel.setAttribute('for', 'task-project');
    let projectSelect = document.createElement('select');
    projectSelect.id = 'task-project';
    projectSelect.name = 'task-project';

    myProjects.forEach((project) => {
        let option = document.createElement('option');
        option.value = project.id;
        option.textContent = project.projectTitle;
        projectSelect.appendChild(option);
    });

    let addButton = document.createElement('button');
    addButton.textContent = 'Add Task';
    addButton.addEventListener('click', function() {
        let projectSelect = document.getElementById('task-project');
        let selectedProjectId = projectSelect.value;
        createTask(selectedProjectId);
    });

    taskForm.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            addButton.click()
        }
    })

    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = enableTaskFormButton;

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            cancelButton.click()
        }
    })

    taskForm.appendChild(titleLabel);
    taskForm.appendChild(titleInput);
    taskForm.appendChild(dueDateLabel);
    taskForm.appendChild(dueDateInput);
    taskForm.appendChild(priorityLabel);
    taskForm.appendChild(prioritySelect);
    taskForm.appendChild(projectLabel);
    taskForm.appendChild(projectSelect);
    taskForm.appendChild(addButton);
    taskForm.appendChild(cancelButton);

    return taskForm
}