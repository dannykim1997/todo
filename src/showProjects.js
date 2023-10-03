import './style.css'
import createSidebar from './sidebar.js'
import createProjectForm from './projectForm.js';
import { displayTasks } from './showTasks.js';

const content = document.getElementById('content');

let defaultProjects = [
    {
        id: 1,
        projectTitle: "Chores",
        projectDescription: "home cleaning stuff"
    },
    {
        id: 2,
        projectTitle: "work",
        projectDescription: "work related stuff"
    }
];

const projectsContainer = document.createElement('div');
projectsContainer.classList.add('projects');
projectsContainer.textContent = 'Projects';

const projectFormButton = document.createElement('button');
projectFormButton.classList.add('project-form-button');
projectFormButton.textContent = 'Add Project';
projectFormButton.onclick = showProjectForm;

export default function showProjects() {
    const sidebar = createSidebar();

    sidebar.appendChild(projectFormButton);
    sidebar.appendChild(projectsContainer);

    defaultProjects.forEach((project) => {
        let projectCard = document.createElement('div');
        let projectTitle = document.createElement('div');
        let projectDescription = document.createElement('div');
        
        projectTitle.dataset.projectId = project.id;

        projectCard.classList.add('project-card');
        projectTitle.classList.add('project-title');
        projectDescription.classList.add('project-description');

        projectTitle.innerHTML = project.projectTitle;
        projectDescription.innerHTML = project.projectDescription;

        projectsContainer.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
        // projectCard.appendChild(projectDescription);
    })

    projectsContainer.addEventListener('click', (e) => {
        const projectId = e.target.dataset.projectId;

        if(projectId) {
            console.log('Project clicked. Project ID:', projectId);
            displayTasks(projectId);
        }
    })

    return projectFormButton, projectsContainer
};

function disableProjectFormButton() {
    projectFormButton.disabled = true;
};

export function enableProjectFormButton() {
    projectFormButton.disabled = false;

    const projectForm = document.querySelector('.project-form');
    if (projectForm) {
        projectForm.remove();
    }
};

export function showProjectForm() {
    disableProjectFormButton();

    const projectForm = createProjectForm();
    content.appendChild(projectForm);
    projectForm.style.display = 'block';

    console.log('addproject clicked');
};

function Project(projectTitle, projectDescription) {
    this.projectTitle = projectTitle;
    this.projectDescription = projectDescription;
};

export function createProject() {
    let projectTitle = document.querySelector('#project-title').value;
    let projectDescription = document.querySelector('#project-description').value;
    let newProject = new Project(projectTitle, projectDescription);
    defaultProjects.push(newProject);
    console.log(defaultProjects);
    clearProjects();
    showProjects();
    enableProjectFormButton();
};

function clearProjects() {
    while(projectsContainer.hasChildNodes()) {
        projectsContainer.removeChild(projectsContainer.firstChild)
    }
};
