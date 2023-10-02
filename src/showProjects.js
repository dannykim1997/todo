import createSidebar from './sidebar.js'
// import createProjectForm from './project-form.js';
import createProjectForm from './projectForm.js';
import './style.css'


export default function showProjects() {
    const sidebar = createSidebar();

    const projectFormButton = document.createElement('button');
    projectFormButton.classList.add('project-form-button');
    projectFormButton.innerHTML = 'Add Project';
    projectFormButton.onclick = showProjectForm;

    const projects = document.createElement('div');
    projects.classList.add('projects');
    projects.innerHTML = 'Projects go here, clickable list';

    sidebar.appendChild(projectFormButton);
    sidebar.appendChild(projects);

    return projectFormButton
}

export function showProjectForm() {
    const projectForm = createProjectForm();

    document.body.appendChild(projectForm);
    projectForm.style.display = 'block';

    console.log('addproject clicked');
}