import './style.css'
import createSidebar from './sidebar.js'
import createProjectForm from './projectForm.js';
import { displayTasks } from './showTasks.js';

let content = document.getElementById('content');

let projectIdCounter = 1;
export let myProjects = [
    {
        id: 1,
        projectTitle: "Default"
        // projectDescription: "Default Projects"
    }
];

let projectsContainer = document.createElement('div');
projectsContainer.classList.add('projects');

let projectFormButton = document.createElement('button');
projectFormButton.classList.add('project-form-button');
projectFormButton.textContent = 'Add Project';
projectFormButton.onclick = showProjectForm;

export default function showProjects() {
    let sidebar = createSidebar();

    sidebar.appendChild(projectFormButton);
    sidebar.appendChild(projectsContainer);

    myProjects.forEach((project) => {
        let projectCard = document.createElement('div');
        let projectTitle = document.createElement('div');
        // let projectDescription = document.createElement('div');
        
        projectCard.classList.add('project-card');
        projectTitle.classList.add('project-title');
        // projectDescription.classList.add('project-description');

        projectTitle.innerHTML = project.projectTitle;
        // projectDescription.innerHTML = project.projectDescription;
       
        project.id = projectIdCounter++;
        projectCard.dataset.projectId = project.id;

        projectsContainer.appendChild(projectCard);
        projectCard.appendChild(projectTitle);

        projectCard.addEventListener('click', (e) => {
            const projectId = projectCard.dataset.projectId;
            
            displayTasks(projectId);
        });
    })

    return projectFormButton, projectsContainer
};

export function disableProjectFormButton() {
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

    let projectForm = createProjectForm();
    content.appendChild(projectForm);
    projectForm.style.display = 'block';
};

function Project(id, projectTitle) {
    this.id = id;
    this.projectTitle = projectTitle;
    // this.projectDescription = projectDescription;
};

export function createProject() {
    let newProjectId = Math.max(...myProjects.map(project => project.id), 0) + 1;
    let projectTitle = document.querySelector('#project-title').value;
    // let projectDescription = document.querySelector('#project-description').value;
    
    let newProject = new Project(newProjectId, projectTitle);

    if (projectTitle.trim() === "") {
        enableProjectFormButton();
        return;
    }

    myProjects.push(newProject);
    clearProjects();
    updateProjectsContainer();
    enableProjectFormButton();
};

export function updateProjectsContainer() {
    myProjects.forEach((project) => {
        let projectCard = document.createElement('div');
        let projectTitle = document.createElement('div');
        // let projectDescription = document.createElement('div');
        
        projectTitle.dataset.projectId = project.id;

        projectCard.classList.add('project-card');
        projectTitle.classList.add('project-title');
        // projectDescription.classList.add('project-description');

        projectTitle.innerHTML = project.projectTitle;
        // projectDescription.innerHTML = project.projectDescription;

        projectsContainer.appendChild(projectCard);
        projectCard.appendChild(projectTitle);
    })

    projectsContainer.addEventListener('click', (e) => {
        let projectId = e.target.dataset.projectId;

        if(projectId) {
            displayTasks(projectId);
        }
    })
};

export function clearProjects() {
    while(projectsContainer.hasChildNodes()) {
        projectsContainer.removeChild(projectsContainer.firstChild)
    }
};
