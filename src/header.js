import './style.css'

const content = document.getElementById('content');

export default function createHeader() {
    const header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '2Do2Day';

    content.appendChild(header);
}