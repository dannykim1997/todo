import createSidebar from './sidebar.js'
import './style.css'

export default function showProjects() {
    const sidebar = createSidebar();

    const projects = document.createElement('div');
    projects.classList.add('projects');
    projects.innerHTML = 'Projects go here, clickable list';

    sidebar.appendChild(projects);
}