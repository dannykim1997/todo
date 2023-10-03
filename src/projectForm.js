import './style.css'
import { createProject, enableProjectFormButton } from './showProjects';

export default function createProjectForm() {
    const projectForm = document.createElement('div');
    projectForm.classList.add('project-form');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Project Title:';
    titleLabel.setAttribute('for', 'project-title');
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'project-title';
    titleInput.name = 'project-title';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.setAttribute('for', 'project-description');
    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'project-description';
    descriptionInput.name = 'project-description';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Project';
    addButton.onclick = createProject;

    const cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.onclick = enableProjectFormButton;

    projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(descriptionLabel);
    projectForm.appendChild(descriptionInput);
    projectForm.appendChild(addButton);
    projectForm.appendChild(cancelButton);

    return projectForm
}