import './style.css'
import displayBody from './index.js'
import createTaskForm from './taskForm.js';
import { deleteTask, editTask, isEditFormOpen, myTasks } from './showTasks.js';

let taskContainer = document.createElement('div');
taskContainer.classList.add('task-container');

export let projectHeaderContainer = document.createElement('div');
projectHeaderContainer.classList.add('project-header')
projectHeaderContainer.innerHTML = 'Select Project:';

let addTaskButton = document.createElement('button');
addTaskButton.classList.add('add-task-button');
addTaskButton.innerHTML = 'Add New Task';
addTaskButton.onclick = showTaskForm;

export default function createTaskContainer() {
    displayBody.appendChild(projectHeaderContainer);
    displayBody.appendChild(addTaskButton);
    displayBody.appendChild(taskContainer);

    return taskContainer;
}

export function disableTaskFormButton() {
    addTaskButton.disabled = true;
}

export function enableTaskFormButton() {
    addTaskButton.disabled = false;

    let taskForm = document.querySelector('.task-form');
    if (taskForm) {
        taskForm.remove();
    }
}

export function showTaskForm() {
    disableTaskFormButton();

    let taskForm = createTaskForm();
    displayBody.appendChild(taskForm);
    taskForm.style.display = 'block';
}

export function clearTasks() {
    while(taskContainer.hasChildNodes()) {
        taskContainer.removeChild(taskContainer.firstChild)
    }
}

export function updateTaskContainer(projectId) {
    let taskContainer = document.querySelector('.task-container');
    let projectTasks = myTasks.filter((task) => task.projectId === parseInt(projectId));

    projectTasks.forEach((task) => {
        let taskCard = document.createElement('div');
        let taskTitle = document.createElement('div');
        let taskDueDate = document.createElement('div');
        let taskPriority = document.createElement('div');
        let taskEditButton = document.createElement('button');
        let taskDeleteButton = document.createElement('button');

        taskCard.classList.add('task-card');
        taskTitle.classList.add('task-title');
        taskDueDate.classList.add('task-due-date');
        taskPriority.classList.add('task-priority');
        taskEditButton.classList.add('task-edit-button');
        taskDeleteButton.classList.add('task-delete-button');

        taskCard.dataset.taskId = task.id; 

        taskEditButton.addEventListener('click', () => {
            if (!isEditFormOpen) {
            let taskId = taskCard.dataset.taskId;
            editTask(taskId, taskEditButton);
            }
        })

        taskDeleteButton.addEventListener('click', () => {
            deleteTask(task.id);
        })

        taskTitle.innerHTML = `Task: ${task.title}`;
        taskDueDate.innerHTML = `Due Date: ${task.dueDate}`;
        taskPriority.innerHTML = `Priority: ${task.priority}`;
        taskEditButton.innerHTML = 'EDIT';        
        taskDeleteButton.innerHTML = 'X';

        taskContainer.appendChild(taskCard);
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskEditButton);
        taskCard.appendChild(taskDeleteButton);
    })
}

export function changeProjectHeader(projectHeader) {
    let projectHeaderTitle = projectHeader.innerHTML;
    projectHeaderContainer.innerHTML = `Project ${projectHeaderTitle}`;
}

export function resetHeader() {
    projectHeaderContainer.innerHTML = 'Select Project:';
}