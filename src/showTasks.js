import './style.css'
import createTaskContainer from './taskContainer.js';
import { enableTaskFormButton, disableTaskFormButton, clearTasks, updateTaskContainer } from './taskContainer.js';
import { clearProjects, updateProjectsContainer, enableProjectFormButton } from './showProjects';

export let taskIdCounter = 1;
export let myTasks = [
    {
        id: 1,
        projectId: 1,
        title: "Vacuum the living room",
        dueDate: "2023-09-15",
        priority: "Medium",
    },
    {
        id: 2,
        projectId: 1,
        title: "Wash dishes",
        dueDate: "2023-09-16",
        priority: "Low",
    }
    // {
    //     id: 3,
    //     projectId: 2,
    //     title: "Finish the report",
    //     dueDate: "2023-09-20",
    //     priority: "High",
    // },
    // {
    //     id: 4,
    //     projectId: 2,
    //     title: "Attend the meeting",
    //     dueDate: "2023-09-18",
    //     priority: "Medium",
    // },
];


export default function showTasks() {
    let taskContainer = createTaskContainer();

    return taskContainer
};

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
        let taskDeleteButton = document.createElement('div');

        taskCard.classList.add('task-card');
        taskTitle.classList.add('task-title');
        taskDueDate.classList.add('task-due-date');
        taskPriority.classList.add('task-priority');
        taskDeleteButton.classList.add('task-delete-button');

        taskTitle.innerHTML = `Task: ${task.title}`;
        taskDueDate.innerHTML = `Due Date: ${task.dueDate}`;
        taskPriority.innerHTML = `Priority: ${task.priority}`;
        taskDeleteButton.innerHTML = 'X';

        task.id = taskIdCounter++;
        taskCard.dataset.taskId = task.id;        

        taskDeleteButton.addEventListener('click', () => {
            console.log(`click ${task.id}`)
            deleteTask(task.id);
        })

        taskContainer.appendChild(taskCard);
        taskCard.appendChild(taskTitle);
        taskCard.appendChild(taskDueDate);
        taskCard.appendChild(taskPriority);
        taskCard.appendChild(taskDeleteButton);
    })
};

function Task(id, projectId, title, dueDate, priority) {
    this.id = id;
    this.projectId = projectId;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
};

export function createTask(projectId) {
    let taskId = Math.max(...myTasks.map(task => task.id), 0) + 1;
    let taskTitle = document.querySelector('#task-title').value;
    let taskDueDate = document.querySelector('#task-due-date').value;
    let taskPriority = document.querySelector('#task-priority').value;

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
};

export function deleteTask(taskId) {
    myTasks = myTasks.filter(task => task.id !== taskId);
    removeTaskFromContainer(taskId);
};

export function removeTaskFromContainer(taskId) {
    let taskContainer = document.querySelector('.task-container');
    let taskCard = taskContainer.querySelector(`[data-task-id="${taskId}"]`);
    if (taskCard) {
        taskContainer.removeChild(taskCard);
    }
};