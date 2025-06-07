import { Data } from "../../utils/decorators";

type Size = 'extra_small' | 'small' | 'medium' | 'large' | 'extra_large';
type Shape = 'round' | 'square';
type Color = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'standard';

type State = 'enabled' | 'disabled' | 'hovered' | 'focused' | 'pressed';

const MEASUREMENTS: { [K in Size]: {
    height: number,
    padding: number,
    separator: number,
    roundBorderRadius: number
} } = {
    extra_small: {
        height: 32,
        padding: 12,
        separator: 4,
        roundBorderRadius: 999,
    },
    small: {
        height: 40,
        padding: 16,
        separator: 8,
        roundBorderRadius: 999,
    },
    medium: {
        height: 56,
        padding: 24,
        separator: 8,
        roundBorderRadius: 999,
    },
    large: {
        height: 96,
        padding: 48,
        separator: 12,
        roundBorderRadius: 999,
    },
    extra_large: {
        height: 136,
        padding: 64,
        separator: 16,
        roundBorderRadius: 999,
    },
};

@Data()
export default class Button extends HTMLElement {
    private _size: Size = 'medium';
    private _shape: Shape = 'round';
    private _color: Color = 'filled';

    private state: State = 'enabled';

    static get observedAttributes() {
        return ['type', 'size', 'shape', 'color'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    attributeChangedCallback(name: string, oldValue: string, newValue: string) {
        if (Button.observedAttributes.includes(name) && oldValue !== newValue) {
            (this as any)[name] = newValue;
            this.updateContent();
        }
    }

    connectedCallback() {
        this.updateContent();
    }

    private updateContent() {
        while (this.shadowRoot?.firstChild) {
            this.shadowRoot.removeChild(this.shadowRoot.firstChild);
        }

        const root = document.createElement('button');

        const style = document.createElement('style');
        style.textContent = `
            button {
                height: ${MEASUREMENTS[this._size].height}px;
                padding: 0 ${MEASUREMENTS[this._size].padding}px;
                border: none;
                border-radius: ${MEASUREMENTS[this._size].roundBorderRadius}px;

                background-color: var(--md-sys-color-surface);
                box-shadow: 0px var(--md-sys-elevation-level1) calc(var(--md-sys-elevation-level1) * 2) 0px rgba(var(--md-sys-color-shadow-rgb, 0,0,0), 0.3);

                color: var(--md-sys-color-primary);
            }

            button:hover {
                cursor: pointer;
            }
        `;

        const textContainer = document.createElement('div');
        textContainer.className = 'text-container';

        if (this.textContent) {
            textContainer.innerText = this.textContent;
        }

        root.appendChild(textContainer);
        this.shadowRoot?.appendChild(style);
        this.shadowRoot?.appendChild(root);
    }
}