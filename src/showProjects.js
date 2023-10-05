import './style.css'
import createSidebar from './sidebar.js'
import createProjectForm from './projectForm.js';
import { displayTasks, myTasks, deleteTask } from './showTasks.js';

let content = document.getElementById('content');

let projectIdCounter = 1;
export let myProjects = [
    {
        id: 1,
        projectTitle: "Default"
    }
];

let projectsContainer = document.createElement('div');
projectsContainer.classList.add('projects');

let projectFormButton = document.createElement('button');
projectFormButton.classList.add('project-form-button');
projectFormButton.textContent = 'Add Project';
projectFormButton.onclick = showProjectForm;

if(localStorage.getItem('myProjects')) {
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
    updateProjectsContainer();
}

export default function showProjects() {
    let sidebar = createSidebar();

    sidebar.appendChild(projectFormButton);
    sidebar.appendChild(projectsContainer);

    while (projectsContainer.firstChild) {
        projectsContainer.removeChild(projectsContainer.firstChild);
    }

    myProjects.forEach((project) => {
        let projectCard = document.createElement('div');
        let projectTitle = document.createElement('div');
        let deleteProjectButton = document.createElement('button');

        projectCard.classList.add('project-card');
        projectTitle.classList.add('project-title');
        deleteProjectButton.classList.add('.delete-project-button');

        projectTitle.innerHTML = project.projectTitle;
        deleteProjectButton.innerHTML = 'X';

        project.id = projectIdCounter++;
        projectCard.dataset.projectId = project.id;

        projectsContainer.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(deleteProjectButton);

        projectCard.addEventListener('click', () => {
            const projectId = projectCard.dataset.projectId;
            
            displayTasks(projectId);
        });

        deleteProjectButton.addEventListener('click', () => {
            deleteProject(project.id);
            console.log(project.id);
        })
    })

    return projectFormButton, projectsContainer
}

export function disableProjectFormButton() {
    projectFormButton.disabled = true;
}

export function enableProjectFormButton() {
    projectFormButton.disabled = false;

    const projectForm = document.querySelector('.project-form');
    if (projectForm) {
        projectForm.remove();
    }
}

export function showProjectForm() {
    disableProjectFormButton();

    let projectForm = createProjectForm();
    content.appendChild(projectForm);
    projectForm.style.display = 'block';
}

function Project(id, projectTitle) {
    this.id = id;
    this.projectTitle = projectTitle;
}

export function createProject() {
    let newProjectId = Math.max(...myProjects.map(project => project.id), 0) + 1;
    let projectTitle = document.querySelector('#project-title').value;
    
    let newProject = new Project(newProjectId, projectTitle);

    if (projectTitle.trim() === "") {
        enableProjectFormButton();
        return;
    }

    myProjects.push(newProject);
    clearProjects();
    updateProjectsContainer();
    enableProjectFormButton();

    localStorage.setItem('myProjects', JSON.stringify(myProjects));
}

export function updateProjectsContainer() {
    myProjects.forEach((project) => {
        let projectCard = document.createElement('div');
        let projectTitle = document.createElement('div');
        let deleteProjectButton = document.createElement('button');

        projectTitle.dataset.projectId = project.id;

        projectCard.classList.add('project-card');
        projectTitle.classList.add('project-title');
        deleteProjectButton.classList.add('.delete-project-button');

        projectTitle.innerHTML = project.projectTitle;
        deleteProjectButton.innerHTML = 'X';

        projectsContainer.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
        projectCard.appendChild(deleteProjectButton);

        deleteProjectButton.addEventListener('click', () => {
            deleteProject(project.id);
            console.log(project.id);
        })

    })

    projectsContainer.addEventListener('click', (e) => {
        let projectId = e.target.dataset.projectId;

        if(projectId) {
            displayTasks(projectId);
        }
    })
}

export function clearProjects() {
    while(projectsContainer.hasChildNodes()) {
        projectsContainer.removeChild(projectsContainer.firstChild)
    }
}

export function deleteProject(projectId) {
    const tasksToDelete = myTasks.filter((task) => task.projectId === projectId);

    tasksToDelete.forEach((task) => {
        deleteTask(task.id); 
    });

    myProjects = myProjects.filter((project) => project.id !== projectId);

    clearProjects();
    updateProjectsContainer();

    localStorage.setItem('myProjects', JSON.stringify(myProjects));
}