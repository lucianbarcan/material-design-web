import { Data } from "../../utils/decorators";
import { BUTTON_COLOR_CONFIG, BUTTON_MEASUREMENTS, type BUTTON_COLOR, type BUTTON_SHAPE, type BUTTON_SIZE, type BUTTON_STATE } from "./button.config";

@Data()
export default class Button extends HTMLElement {
    private _size: BUTTON_SIZE = 'medium';
    private _shape: BUTTON_SHAPE = 'round';
    private _color: BUTTON_COLOR = 'filled';
    private _icon: string | null = null;
    private _disabled: boolean = false;

    private state: BUTTON_STATE = 'enabled';

    static get observedAttributes() {
        return ['type', 'size', 'shape', 'color', 'icon', 'disabled'];
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

        const shape = this._shape === 'round' ? BUTTON_MEASUREMENTS[this._size].roundBorderRadius : BUTTON_MEASUREMENTS[this._size].squareBorderRadius;

        this._disabled = this.hasAttribute('disabled');
        if (this._disabled) this.state = 'disabled';
        const colorConfig = BUTTON_COLOR_CONFIG[this._color][this.state];

        // Normal
        const backgroundColor = colorConfig.container ?
            colorConfig.containerOpacity ?
                `background-color: color-mix(in srgb, var(${colorConfig.container}) ${colorConfig.containerOpacity * 100}%, transparent);`
                : `background-color: var(${colorConfig.container});`
            : '';

        const color = colorConfig.labelOpacity ?
            `color: color-mix(in srgb, var(${colorConfig.labelColor}) ${colorConfig.labelOpacity * 100}%, transparent);`
            : `color: var(${colorConfig.labelColor});`;

        const shadow = colorConfig.elevation ?
            `box-shadow: 0px var(--md-sys-elevation-level${colorConfig.elevation}) calc(var(--md-sys-elevation-level${colorConfig.elevation}) * 2) 0px color-mix(in srgb, var(${colorConfig.shadow}) 30%, transparent);`
            : '';

        const border = colorConfig.outline ?
            `border: 1px solid var(${colorConfig.outline});`
            : 'border: none;';

        // Hover
        let hoverCursor: string = '';
        let hoverBackground: string = '';
        let hoverStateLayer: string = '';
        let hoverBorder: string = '';
        let hoverColor: string = '';
        let hoverShadow: string = '';
        if (this.state !== 'disabled') {
            hoverCursor = 'cursor: pointer;'
            const hoverConfig = BUTTON_COLOR_CONFIG[this._color]['hovered'];

            hoverBackground = hoverConfig.container ?
                hoverConfig.containerOpacity ?
                    `background-color: color-mix(in srgb, var(${hoverConfig.container}) ${hoverConfig.containerOpacity * 100}%, transparent);`
                    : `background-color: var(${hoverConfig.container});`
                : '';

            hoverStateLayer = hoverConfig.stateLayer && hoverConfig.stateLayerOpacity ?
                `background-image: linear-gradient(color-mix(in srgb, var(${hoverConfig.stateLayer}) ${hoverConfig.stateLayerOpacity * 100}%, transparent), color-mix(in srgb, var(${hoverConfig.stateLayer}) ${hoverConfig.stateLayerOpacity * 100}%, transparent));`
                : '';

            hoverBorder = hoverConfig.outline ?
                `border: 1px solid var(${hoverConfig.outline});`
                : 'border: none;';

            hoverColor = `color: var(${hoverConfig.labelColor});`;

            hoverShadow = hoverConfig.elevation ?
                `box-shadow: 0px var(--md-sys-elevation-level${hoverConfig.elevation}) calc(var(--md-sys-elevation-level${hoverConfig.elevation}) * 2) 0px color-mix(in srgb, var(${hoverConfig.shadow}) 30%, transparent);`
                : '';
        }


        style.textContent = `
            button {
                height: ${BUTTON_MEASUREMENTS[this._size].height}px;
                padding: 0 ${BUTTON_MEASUREMENTS[this._size].padding}px;
                border-radius: var(${shape});

                ${border}
                ${backgroundColor}
                ${color}
                ${shadow}

                font-family: var(${BUTTON_MEASUREMENTS[this._size].font});
                font-weight: var(${BUTTON_MEASUREMENTS[this._size].fontWeight});
                font-size: ${BUTTON_MEASUREMENTS[this._size].fontSize}px;
                line-height: ${BUTTON_MEASUREMENTS[this._size].lineHeight}px;
                letter-spacing: ${BUTTON_MEASUREMENTS[this._size].fontTracking}px;
            }

            button:hover {
                ${hoverCursor}
                ${hoverBackground}
                ${hoverStateLayer}
                ${hoverBorder}
                ${hoverColor}
                ${hoverShadow}
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
                    font-size: ${BUTTON_MEASUREMENTS[this._size].iconSize}px;
                    margin-right: ${BUTTON_MEASUREMENTS[this._size].separator}px;
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