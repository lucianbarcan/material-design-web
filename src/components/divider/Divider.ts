import { Color } from "../../styling/Color";

export default class Divider extends HTMLElement {
    static get observedAttributes() {
        return [];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.updateContent();
    }

    private updateContent() {
        while (this.shadowRoot?.firstChild) {
            this.shadowRoot.removeChild(this.shadowRoot.firstChild);
        }

        const root = document.createElement('div');
        const style = document.createElement('style');

        const color = `background-color: var(${Color.OutlineVariant});`

        let marginLeft = '0';
        let marginRight = '0';
        let width = '100%';

        if (this.hasAttribute('inset') || this.hasAttribute('inset-start'))
            marginLeft = '16px';

        if (this.hasAttribute('inset') || this.hasAttribute('inset-end'))
            marginRight = '16px';

        if (marginLeft !== '0' || marginRight !== '0') {
            width = `calc(100% - ${marginLeft} - ${marginRight})`;
        }

        style.textContent = `
            div {
            width: ${width};
            ${color}
            height: 1px;
            margin-left: ${marginLeft};
            margin-right: ${marginRight};
            margin-bottom: 8px;
            }
        `;

        this.shadowRoot?.appendChild(style);
        this.shadowRoot?.appendChild(root);
    }
}