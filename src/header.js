import './style.css'

let content = document.getElementById('content');

export default function createHeader() {
    let headerWrapper = document.createElement('div')
    headerWrapper.classList.add('header-wrapper');

    let header = document.createElement('div');
    header.classList.add('header');
    header.innerHTML = '2Do2Day';

    content.appendChild(headerWrapper);
    headerWrapper.appendChild(header);
}