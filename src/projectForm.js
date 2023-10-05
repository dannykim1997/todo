import './style.css'
import { createProject, enableProjectFormButton } from './showProjects';

export default function createProjectForm() {
    let projectForm = document.createElement('div');
    projectForm.classList.add('project-form');

    let titleLabel = document.createElement('label');
    titleLabel.textContent = 'Project Title:';
    titleLabel.setAttribute('for', 'project-title');
    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'project-title';
    titleInput.name = 'project-title';

    let addButton = document.createElement('button');
    addButton.textContent = 'Add Project';
    addButton.onclick = createProject;

    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = enableProjectFormButton;

    projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(addButton);
    projectForm.appendChild(cancelButton);

    return projectForm
}