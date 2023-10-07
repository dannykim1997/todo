import './style.css'
import createTaskContainer from './taskContainer.js';
import { enableTaskFormButton, clearTasks, updateTaskContainer, changeProjectHeader } from './taskContainer.js';
import createEditTaskForm from './editTaskForm';
import displayBody from './index.js'

export let myTasks = [];

export let isEditFormOpen = false;

export default function showTasks() {
    let taskContainer = createTaskContainer();
    return taskContainer
}

export function displayTasks(projectId) {
    let taskContainer = document.querySelector('.task-container');
    let projectTasks = myTasks.filter((task) => task.projectId === parseInt(projectId));

    while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
    }

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

        taskTitle.innerHTML = `Task: ${task.title}`;
        taskDueDate.innerHTML = `Due Date: ${task.dueDate}`;
        taskPriority.innerHTML = `Priority: ${task.priority}`;
        taskEditButton.innerHTML = 'EDIT';
        taskDeleteButton.innerHTML = 'X';

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

        taskContainer.appendChild(taskCard);
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskEditButton);
        taskCard.appendChild(taskDeleteButton);
    })
}

function Task(id, projectId, title, dueDate, priority) {
    this.id = id;
    this.projectId = projectId;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
}

export function createTask(projectId) {
    let taskId = Math.max(...myTasks.map(task => task.id), 0) + 1;
    let taskTitle = document.querySelector('#task-title').value;
    let taskDueDate = document.querySelector('#task-due-date').value;
    let taskPriority = document.querySelector('#task-priority').value;
    let taskProject = document.getElementById('task-project');
    let selectedOption = taskProject.options[taskProject.selectedIndex];

    projectId = parseInt(projectId);

    let newTask = new Task(taskId, projectId, taskTitle, taskDueDate, taskPriority);

    if (taskTitle.trim() === "") {
        enableTaskFormButton();
        return;
    }

    myTasks.push(newTask);

    clearTasks();
    enableTaskFormButton();
    updateTaskContainer(projectId);
    changeProjectHeader(selectedOption);
    saveTasksToStorage();
}


export function editTask(taskId, taskEditButton) {
    isEditFormOpen = true;
    disableEditTaskFormButton(taskEditButton);

    let editTaskForm = createEditTaskForm(taskId, taskEditButton);
    displayBody.appendChild(editTaskForm);
    editTaskForm.style.display = 'block';
}

export function disableEditTaskFormButton(taskEditButton) {
    taskEditButton.disabled = true;
}

export function enableEditTaskFormButton(taskEditButton) {
    isEditFormOpen = false;
    taskEditButton.disabled = false;
    
    let editTaskFormForm = document.querySelector('.edit-task-form');
    if (editTaskFormForm) {
        editTaskFormForm.remove();
    }
}

export function saveEditedTask(taskId, taskEditButton, task) {
    isEditFormOpen = false;
    let editedTaskIndex = myTasks.findIndex((task) => task.id === parseInt(taskId));

    if (editedTaskIndex !== -1) {
       
        myTasks[editedTaskIndex].title = document.querySelector('#edit-task-title').value;
        myTasks[editedTaskIndex].dueDate = document.querySelector('#edit-task-due-date').value;
        myTasks[editedTaskIndex].priority = document.querySelector('#edit-task-priority').value;
        
        clearTasks();
        enableEditTaskFormButton(taskEditButton);
        updateTaskContainer(myTasks[editedTaskIndex].projectId);

        saveTasksToStorage();
    }
}

export function deleteTask(taskId) {
    myTasks = myTasks.filter(task => task.id !== taskId);

    removeTaskFromContainer(taskId);
    
    saveTasksToStorage();
}

export function removeTaskFromContainer(taskId) {
    let taskContainer = document.querySelector('.task-container');
    let taskCard = taskContainer.querySelector(`[data-task-id="${taskId}"]`);
    if (taskCard) {
        taskContainer.removeChild(taskCard);
    }
}

export function loadTasksFromStorage() {
    const storedTasks = JSON.parse(localStorage.getItem('myTasks'));

    if (storedTasks) {
        myTasks = storedTasks;
    }
}

export function saveTasksToStorage() {
    localStorage.setItem('myTasks', JSON.stringify(myTasks));
}