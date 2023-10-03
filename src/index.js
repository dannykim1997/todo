import './style.css'
import createHeader from "./header.js";
import showProjects from "./showProjects.js";
import showTasks from "./showTasks.js";

const content = document.getElementById('content');

const displayBody = document.createElement('div');
displayBody.classList.add('display-body');
content.appendChild(displayBody);

export default displayBody;

createHeader();
showProjects();
showTasks();

console.log('src connected to dist!!');
