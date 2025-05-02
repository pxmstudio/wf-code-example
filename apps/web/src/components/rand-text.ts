class PxRandText extends HTMLElement {
    private randomTexts: string[] = [
        "Hello World",
        "Welcome to the future",
        "Coding is fun",
        "Web components rock",
        "TypeScript is awesome",
        "Custom elements are powerful",
        "Modern web development",
        "Pixel perfect design"
    ]
    private textEl: HTMLElement;

    constructor() {
        super();

        this.textEl = this.querySelector("[data-text]") as HTMLElement;
    }

    connectedCallback() {
        const randomIndex = Math.floor(Math.random() * this.randomTexts.length);
        const randomText = this.randomTexts[randomIndex];

        this.textEl.innerHTML = randomText;
    }
}

customElements.define("px-rand-text", PxRandText);