export default class LateralMenu {
    constructor() {
        this.container = document.getElementById('lateral-menu');
    }

    createLateralMenu() {
        const homeIcon = '/assets/images/menu/homeIcon.svg';
        const messagesIcon = '/assets/images/menu/messagesIcon.svg';  
        const profileIcon = '/assets/images/menu/profileIcon.svg';
        const postIcon = '/assets/images/menu/postIcon.svg';
        const settingsIcon = '/assets/images/menu/settingsIcon.svg';
            
        const lateralMenu = `
            <nav class="lateral-menu">
                <ul>
                    <li class="thin-border-bottom">
                        <a href="index.html">
                            <img src="${homeIcon}" alt="Home">
                            <span class="nova-square-font home">Home</span>
                        </a>
                    </li>
                    <li class="thin-border-bottom">    
                        <a href="messages.html">
                            <img src="${messagesIcon}" alt="Messages">
                            <span class="nova-square-font messages">Mensagens</span>
                        </a>
                    </li>
                    <li class="thin-border-bottom">
                        <a href="profile.html">
                            <img src="${profileIcon}" alt="Profile">
                            <span class="nova-square-font profile">Perfil</span>
                        </a>
                    </li>
                    <li class="thin-border-bottom">
                        <a href="post.html">
                            <img src="${postIcon}" alt="Post">
                            <span class="nova-square-font post">Postagem</span>
                        </a>
                    </li>
                    <li class="thin-border-bottom">
                        <a href="settings.html">
                            <img src="${settingsIcon}" alt="Settings">
                            <span class="nova-square-font settings">Configurações</span>
                        </a>
                    </li>
                </ul>
        `;
        
        this.container.style.display = 'flex';
        this.container.innerHTML = lateralMenu;
    }
}