export default class loadHeader {
    constructor() {
        this.container = document.getElementById('header');
    }

    createHeader() {
        const logoPath = '/assets/images/svgs/logo.svg';
        const profilePicPlaceholder = '/assets/images/svgs/profile-pic.svg';  
        const arrowDown = '/assets/images/svgs/arrow-down.svg';

        const headerHTML = `
            <div class="logo-container">
                <a href="index.html"><img src="${logoPath}" alt="Logo" class="logo"></a>
            </div>
            <div class="search-container">
                <input type="text" id="search" placeholder="Buscar...">
                <img src="/assets/images/svgs/search.svg" alt="Search" class="search-icon">
            </div>
            <div class="dropdown">
                <button class="dropdown-button thin-border flex-row-center-around">
                    <img src="${profilePicPlaceholder}" alt="Profile Pic" class="profile-pic">
                    <img src="${arrowDown}" alt="Arrow Down" class="arrow-down">
                </button>
                <div class="dropdown-content">
                    <a href="#">Trocar Conta</a>
                    <a href="#">Editar Perfil</a>
                    <a id="logout-button" href="#">Sair</a>
                </div>
            </div>
        `;

        this.container.innerHTML = headerHTML;
        this.initDropdown();
    }

    initDropdown() {
        const button = this.container.querySelector('.dropdown-button');
        const content = this.container.querySelector('.dropdown-content');

        button.addEventListener('click', () => {
            content.classList.toggle('show');
            
            const arrowImage = this.container.querySelector('.arrow-down');

            if (content.classList.contains('show')) {
                arrowImage.style.transform = 'rotate(180deg)';
            } else {
                arrowImage.style.transform = 'rotate(0deg)';
            }
        });

        document.addEventListener('click', (event) => {
            if (!button.contains(event.target) && !content.contains(event.target)) {
                content.classList.remove('show');
            }
        });
    }
}