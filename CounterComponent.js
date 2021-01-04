const template = document.createElement('template');
template.innerHTML = `
    <p id="counterParagraph"></p>
`;

class CounterComponent extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    get count(){
        return this.getAttribute('count')
    }

    set count(val){
        this.setAttribute("count", val)
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector('#counterParagraph').innerHTML = "Počet prístupov na stránku: "+ newValue
    }

    static get observedAttributes(){
        return ["count"]
    }


}

window.customElements.define('counter-component', CounterComponent);