class menu extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <section data-bs-version="5.1" class="menu cid-s48OLK6784" once="menu" id="menu1-h">
            <nav class="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
                <div class="container">
                    <div class="navbar-brand">
                        <span class="navbar-logo">
                            <a href="/">
                                <img src="assets/images/logo-96x84.png" alt="Ministerio Hispano Internacional" style="height: 3.8rem;">
                            </a>
                        </span>
                        <span class="navbar-caption-wrap"><a class="navbar-caption text-black display-7" href="/">Hijos de Dios</a></span>
                    </div>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-bs-toggle="collapse" data-target="#navbarSupportedContent" data-bs-target="#navbarSupportedContent" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <div class="hamburger">
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav nav-dropdown nav-right" data-app-modern-menu="true"><li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="sobre-nosotros">Sobre Nosotros</a></li>
                            <li class="nav-item"><a class="nav-link link text-black text-primary display-4" href="nuestras-creencias">Nuestras Creencias</a></li></ul>       
                    </div>
                </div>
            </nav>
        </section>`;
    }
}

class footer extends HTMLElement{
    constructor(){
        super();
    }
    connectedCallback(){
        this.innerHTML = `
        <footer data-bs-version="5.1" class="footer3 cid-tfJbuWfM8w" once="footers" id="footer3-n">
            <div class="container">
                <div class="media-container-row align-center mbr-white">
                    <div class="row row-links">
                        <ul class="foot-menu">
                            <li class="foot-menu-item mbr-fonts-style display-7"><a class="text-white text-primary" href="sobre-nosotros">Sobre Nosotros</a></li>
                            <li class="foot-menu-item mbr-fonts-style display-7"><a class="text-white text-primary" href="nuestras-creencias">Nuestras Creencias</a></li>
                            <li class="foot-menu-item mbr-fonts-style display-7"><a class="text-white text-primary" href="mailto:info@site.com">Contáctenos</a></li>
                        </ul>
                    </div>
                    <div class="row social-row">
                        <div class="social-list align-right pb-2">
                            <div class="soc-item">
                                <a href="https://twitter.com/" target="_blank">
                                    <span class="socicon-twitter socicon mbr-iconfont mbr-iconfont-social"></span>
                                </a>
                            </div>
                            <div class="soc-item">
                                <a href="https://www.facebook.com/pages/" target="_blank">
                                    <span class="socicon-facebook socicon mbr-iconfont mbr-iconfont-social"></span>
                                </a>
                            </div>
                            <div class="soc-item">
                                <a href="https://www.youtube.com" target="_blank">
                                    <span class="socicon-youtube socicon mbr-iconfont mbr-iconfont-social"></span>
                                </a>
                            </div>
                            <div class="soc-item">
                                <a href="https://instagram.com" target="_blank">
                                    <span class="socicon-instagram socicon mbr-iconfont mbr-iconfont-social"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row row-copirayt">
                        <p class="mbr-text mb-0 mbr-fonts-style mbr-white align-center display-7">
                            © Copyright 2022 MHI. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer> `;
    }
}

window.customElements.define("wc-menu", menu);
window.customElements.define("wc-footer", footer);