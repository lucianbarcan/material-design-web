import { Data } from "../../utils/decorators";

type Size = 'extra_small' | 'small' | 'medium' | 'large' | 'extra_large';
type Shape = 'round' | 'square';
type Color = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'standard';

type State = 'enabled' | 'disabled' | 'hovered' | 'focused' | 'pressed';

const MEASUREMENTS: { [K in Size]: {
    height: number,
    padding: number,
    separator: number,
    roundBorderRadius: number,
    iconSize: number,
} } = {
    extra_small: {
        height: 32,
        padding: 12,
        separator: 4,
        roundBorderRadius: 999,
        iconSize: 20,
        // squareBorderRadius
        // leading space
        // trailing space
        // spring animation damping
        // spring animation stiffness
    },
    small: {
        height: 40,
        padding: 16,
        separator: 8,
        roundBorderRadius: 999,
        iconSize: 20,
    },
    medium: {
        height: 56,
        padding: 24,
        separator: 8,
        roundBorderRadius: 999,
        iconSize: 24,
    },
    large: {
        height: 96,
        padding: 48,
        separator: 12,
        roundBorderRadius: 999,
        iconSize: 32,
    },
    extra_large: {
        height: 136,
        padding: 64,
        separator: 16,
        roundBorderRadius: 999,
        iconSize: 40,
    },
};

@Data()
export default class Button extends HTMLElement {
    private _size: Size = 'medium';
    private _shape: Shape = 'round';
    private _color: Color = 'filled';
    private _icon: string | null = null;

    private state: State = 'enabled';

    static get observedAttributes() {
        return ['type', 'size', 'shape', 'color', 'icon'];
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

                background-color: var(--md-sys-color-surface-container-low);
                box-shadow: 0px var(--md-sys-elevation-level1) calc(var(--md-sys-elevation-level1) * 2) 0px color-mix(in srgb, var(--md-sys-color-shadow) 30%, transparent);

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

        if (this._icon) {
            style.textContent += `
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .material-symbols-outlined {
                    font-size: ${MEASUREMENTS[this._size].iconSize}px;
                    margin-right: ${MEASUREMENTS[this._size].separator}px;
                }
            `;

            const rel = document.createElement('link');
            rel.rel = 'stylesheet';
            rel.href = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${this._icon}`;
            this.shadowRoot?.appendChild(rel);

            const span = document.createElement('span');
            span.className = 'material-symbols-outlined';
            span.textContent = this._icon;
            root.appendChild(span);
        }

        root.appendChild(textContainer);
        this.shadowRoot?.appendChild(style);
        this.shadowRoot?.appendChild(root);
    }
}