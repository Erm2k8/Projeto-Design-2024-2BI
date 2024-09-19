import Header from './components/Header.js';
import LateralMenu from './components/LateralMenu.js';

function loadFavicon() {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = '/assets/images/global/favicon.png';
    document.head.appendChild(link);
}

function loadHeader() {
    const header = new Header();
    header.createHeader();
}

function loadLateralMenu() {
    const lateralMenu = new LateralMenu();
    lateralMenu.createLateralMenu();
}

document.addEventListener('DOMContentLoaded', () => {
    loadFavicon();
    loadHeader();
    loadLateralMenu();
});
