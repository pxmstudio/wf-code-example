class Hello extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.getHonoMessage().then((message) => {
            this.textContent = message;
        });
    }

    async getHonoMessage() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        const data = await response.text();
        return data;
    }
}

customElements.define("px-hello", Hello);