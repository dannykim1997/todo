import './style.css'
import createTaskContainer from './taskContainer.js';
import showProjects from './showProjects.js';

const defaultTasks = [
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
    },
    {
        id: 3,
        projectId: 2,
        title: "Finish the report",
        dueDate: "2023-09-20",
        priority: "High",
    },
    {
        id: 4,
        projectId: 2,
        title: "Attend the meeting",
        dueDate: "2023-09-18",
        priority: "Medium",
    },
];

// const tasksContainer = document.createElement('div');
// tasksContainer.classList.add('tasks');
// tasksContainer.textContent = 'Tasks';

export default function showTasks() {
    const taskContainer = createTaskContainer();


    // taskContainer.appendChild(addTaskButton);
    // taskBody.appendChild(tasksContainer);

    return taskContainer
}

export function displayTasks(projectId) {
    console.log('displayTasks invoked')
    const taskContainer = document.querySelector('.task-container');
    const projectTasks = defaultTasks.filter((task) => task.projectId === parseInt(projectId));
    
    while (taskContainer.firstChild) {
        taskContainer.removeChild(taskContainer.firstChild);
    }

    projectTasks.forEach((task) => {
        const taskCard = document.createElement('div');
        taskCard.classList.add('task-card');
        taskCard.innerHTML = `
        <div class="task-title">${task.title}</div>
        <div class="task-details">
            <div class="task-due-date">Due Date: ${task.dueDate}</div>
            <div class="task-priority">Priority: ${task.priority}</div>
        </div>
        `;
        taskContainer.appendChild(taskCard);
    })
}