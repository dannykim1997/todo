import './style.css'

const content = document.getElementById('content');

export default function createSidebar() {
    const sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = 'Sidebar Here';

    content.appendChild(sidebar);
}