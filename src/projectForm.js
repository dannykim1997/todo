import './style.css'

export default function createProjectForm() {
    const projectForm = document.createElement('div');
    projectForm.classList.add('project-form');

    const titleLabel = document.createElement('label');
    titleLabel.textContent = 'Title:';
    titleLabel.htmlFor = 'title';
    const titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.id = 'title';
    titleInput.name = 'title';

    const descriptionLabel = document.createElement('label');
    descriptionLabel.textContent = 'Description:';
    descriptionLabel.htmlFor = 'description';
    const descriptionInput = document.createElement('textarea');
    descriptionInput.id = 'description';
    descriptionInput.name = 'description';

    const dueDateLabel = document.createElement('label');
    dueDateLabel.textContent = 'Due Date:';
    descriptionLabel.htmlFor = 'dueDate';
    const dueDateInput = document.createElement('input');
    dueDateInput.type = 'date';
    dueDateInput.id = 'dueDate';
    dueDateInput.name = 'dueDate';

    const priorityLabel = document.createElement('label');
    priorityLabel.textContent = 'Priority:';
    descriptionLabel.htmlFor = 'priority';
    const priorityInput = document.createElement('select');
    priorityInput.id = 'priority';
    priorityInput.name = 'priority';

    const addButton = document.createElement('button');
    addButton.textContent = 'Add Project';

    projectForm.appendChild(titleLabel);
    projectForm.appendChild(titleInput);
    projectForm.appendChild(descriptionLabel);
    projectForm.appendChild(descriptionInput);
    projectForm.appendChild(dueDateLabel);
    projectForm.appendChild(dueDateInput);
    projectForm.appendChild(priorityLabel);
    projectForm.appendChild(priorityInput);
    projectForm.appendChild(addButton);

    return projectForm
}