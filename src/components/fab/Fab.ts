import { Data } from "../../utils/decorators";
import { FAB_MEASUREMENTS, type FAB_SIZE } from "./fab.config";

@Data()
export class Fab extends HTMLElement {
    private _size: FAB_SIZE = 'default';
    private _icon: string = '';

    static get observedAttributes() {
        return ['size', 'icon'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.updateContent();
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (Fab.observedAttributes.includes(name) && oldValue !== newValue) {
            (this as any)[name] = newValue;
            this.updateContent();
        }
    }

    private updateContent() {
        while (this.shadowRoot?.firstChild) {
            this.shadowRoot.removeChild(this.shadowRoot.firstChild);
        }

        const root = document.createElement('div');
        root.classList.add('fab-parent');

        const button = document.createElement('button');

        const measurements = FAB_MEASUREMENTS[this._size];

        const height = measurements.height;
        const width = measurements.width;
        const iconSize = measurements.iconSize;
        const shape = measurements.shape;

        const style = document.createElement('style');
        style.innerText = `
            button {
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                position: absolute;
                bottom: 16px;
                right: 16px;
                height: ${height}px;
                width: ${width}px;
                border-radius: var(${shape});
            }

            button:hover {
                cursor: pointer;
            }

            .material-symbols-outlined {
                font-size: ${iconSize}px;
            }

            .fab-parent {
                position: relative;
                width: 100%;
                height: 100%;
            }
        `;

        const rel = document.createElement('link');
        rel.rel = 'stylesheet';
        rel.href = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${this._icon}`;
        this.shadowRoot?.appendChild(rel);

        const span = document.createElement('span');
        span.className = 'material-symbols-outlined';
        span.textContent = this._icon;
        button.appendChild(span);

        root.appendChild(button);

        this.shadowRoot?.appendChild(style);
        this.shadowRoot?.appendChild(root);
    }
}