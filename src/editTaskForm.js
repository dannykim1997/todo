import './style.css'
import { enableEditTaskFormButton, saveEditedTask, myTasks } from './showTasks.js';

export default function createEditTaskForm(taskId, taskEditButton) {
    let editedTaskIndex = myTasks.findIndex((task) => task.id === parseInt(taskId));

    let editTaskForm = document.createElement('div');
    editTaskForm.classList.add('edit-task-form');

    let editTitleLabel = document.createElement('label');
    editTitleLabel.textContent = 'Task:';
    editTitleLabel.setAttribute('for', 'edit-task-title');
    let editTitleInput = document.createElement('input');
    editTitleInput.type = 'text';
    editTitleInput.id = 'edit-task-title';
    editTitleInput.name = 'edit-task-title';
    editTitleInput.value = `${myTasks[editedTaskIndex].title}`

    let editDueDateLabel = document.createElement('label');
    editDueDateLabel.textContent = 'Due Date:';
    editDueDateLabel.setAttribute('for', 'edit-task-due-date');
    let editDueDateInput = document.createElement('input');
    editDueDateInput.type = 'date';
    editDueDateInput.id = 'edit-task-due-date';
    editDueDateInput.name = 'edit-task-due-date';
    editDueDateInput.value = `${myTasks[editedTaskIndex].dueDate}`

    let editPriorityLabel = document.createElement('label');
    editPriorityLabel.textContent = 'Priority:';
    editPriorityLabel.setAttribute('for', 'edit-task-priority');
    let editPrioritySelect = document.createElement('select');
    editPrioritySelect.id = 'edit-task-priority';
    editPrioritySelect.name = 'edit-task-priority';

    let priorityOptions = ['High', 'Medium', 'Low'];

    priorityOptions.forEach((priority) => {
        let option = document.createElement('option');
        option.value = priority;
        option.textContent = priority;
        editPrioritySelect.appendChild(option);
    });
    editPrioritySelect.value = `${myTasks[editedTaskIndex].priority}`;

    let saveButton = document.createElement('button');
    saveButton.type = 'submit';
    saveButton.textContent = 'Save Changes';
    saveButton.addEventListener('click', () => {
        saveEditedTask(taskId, taskEditButton, myTasks[editedTaskIndex]);
    });

    editTaskForm.addEventListener('keydown', (e) => {
        if(e.key === 'Enter') {
            saveButton.click()
            //editTaskForm.querySelector('button[type="submit"]').click();
        }
    })

    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
        enableEditTaskFormButton(taskEditButton);
    })

    document.addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            cancelButton.click()
        }
    })

    editTaskForm.appendChild(editTitleLabel);
    editTaskForm.appendChild(editTitleInput);
    editTaskForm.appendChild(editDueDateLabel);
    editTaskForm.appendChild(editDueDateInput);
    editTaskForm.appendChild(editPriorityLabel);
    editTaskForm.appendChild(editPrioritySelect);
    editTaskForm.appendChild(saveButton);
    editTaskForm.appendChild(cancelButton);

    return editTaskForm
}