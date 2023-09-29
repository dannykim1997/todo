import createHeader from "./header";
import createSidebar from "./sidebar";
import createTaskContainer from "./task-container";
import './style.css'

const content = document.getElementById('content');

const displayBody = document.createElement('div');
displayBody.classList.add('display-body');
content.appendChild(displayBody);

export default displayBody;

createHeader();
createSidebar();
createTaskContainer();

console.log('src connected to dist!!');
