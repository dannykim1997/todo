import './style.css'

let content = document.getElementById('content');

export default function createHeader() {
    let header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '2Do2Day';

    content.appendChild(header);
}