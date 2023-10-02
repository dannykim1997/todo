import createHeader from "./header.js";
import showProjects from "./showProjects.js";
import showTasks from "./showTasks.js";
// import addProject from "./project-form.js";
import './style.css'

const content = document.getElementById('content');

const displayBody = document.createElement('div');
displayBody.classList.add('display-body');
content.appendChild(displayBody);

export default displayBody;

createHeader();
showProjects();
showTasks();
// addProject();

console.log('src connected to dist!!');
