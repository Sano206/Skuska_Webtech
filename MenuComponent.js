const template = document.createElement('template');
template.innerHTML = `
    <div>
        
    
    </div>
`;

class MenuComponent extends HTMLElement{
    constructor() {
        super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

}

window.customElements.define('menu-component', MenuComponent);