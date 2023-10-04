import './style.css'

let content = document.getElementById('content');

export default function createSidebar() {
    let sidebar = document.createElement('div');
    sidebar.classList.add('sidebar');
    sidebar.innerHTML = 'Projects';

    content.appendChild(sidebar);

    return sidebar;
}