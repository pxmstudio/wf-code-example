class PxRandomText extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = "Hello World";
    }
}

customElements.define("px-random-text", PxRandomText);