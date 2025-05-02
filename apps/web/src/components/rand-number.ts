class PxRandNumber extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.getRandomNumber().then((number) => {
            this.innerHTML = number;
        });
    }

    async getRandomNumber() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}`);
        const data = await response.text();

        return data;
    }
}

customElements.define("px-rand-number", PxRandNumber);