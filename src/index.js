import './style.css'
import createHeader from "./header.js";
import showProjects, { myProjects } from "./showProjects.js";
import showTasks, { myTasks } from "./showTasks.js";

let content = document.getElementById('content');

let displayBody = document.createElement('div');
displayBody.classList.add('display-body');
content.appendChild(displayBody);

export default displayBody;

if(localStorage.getItem('myProjects')) {
    myProjects = JSON.parse(localStorage.getItem('myProjects'));
}

if(localStorage.getItem('myTasks')) {
    myTasks = JSON.parse(localStorage.getItem('myTasks'));
}

createHeader();
showProjects();
showTasks();
