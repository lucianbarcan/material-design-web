import { Font, FontWeight } from "../../styling/Font";
import { ShapeCorner } from "../../styling/Shape";
import { Data } from "../../utils/decorators";

type Size = 'extra_small' | 'small' | 'medium' | 'large' | 'extra_large';
type Shape = 'round' | 'square';
type Color = 'elevated' | 'filled' | 'tonal' | 'outlined' | 'standard';

type State = 'enabled' | 'disabled' | 'hovered' | 'focused' | 'pressed';

const MEASUREMENTS: { [K in Size]: {
    height: number,
    padding: number,
    separator: number,
    roundBorderRadius: ShapeCorner,
    squareBorderRadius: ShapeCorner,
    iconSize: number,
    font: Font,
    fontWeight: FontWeight,
    fontSize: number,
    lineHeight: number,
    fontTracking: number
} } = {
    extra_small: {
        height: 32,
        padding: 12,
        separator: 4,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.Medium,
        iconSize: 20,
        font: Font.Plain,
        fontWeight: FontWeight.Medium,
        fontSize: 14,
        lineHeight: 20,
        fontTracking: 0.1,
        // leading space
        // trailing space
        // spring animation damping
        // spring animation stiffness
    },
    small: {
        height: 40,
        padding: 16,
        separator: 8,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.Medium,
        iconSize: 20,
        font: Font.Plain,
        fontWeight: FontWeight.Medium,
        fontSize: 14,
        lineHeight: 20,
        fontTracking: 0.1,
    },
    medium: {
        height: 56,
        padding: 24,
        separator: 8,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.Large,
        iconSize: 24,
        font: Font.Plain,
        fontWeight: FontWeight.Medium,
        fontSize: 16,
        lineHeight: 24,
        fontTracking: 0.15,
    },
    large: {
        height: 96,
        padding: 48,
        separator: 12,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.ExtraLarge,
        iconSize: 32,
        font: Font.Brand,
        fontWeight: FontWeight.Regular,
        fontSize: 24,
        lineHeight: 32,
        fontTracking: 0,
    },
    extra_large: {
        height: 136,
        padding: 64,
        separator: 16,
        roundBorderRadius: ShapeCorner.Circular,
        squareBorderRadius: ShapeCorner.ExtraLarge,
        iconSize: 40,
        font: Font.Brand,
        fontWeight: FontWeight.Regular,
        fontSize: 32,
        lineHeight: 40,
        fontTracking: 0,
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

        const shape = this._shape === 'round' ? MEASUREMENTS[this._size].roundBorderRadius : MEASUREMENTS[this._size].squareBorderRadius;

        style.textContent = `
            button {
                height: ${MEASUREMENTS[this._size].height}px;
                padding: 0 ${MEASUREMENTS[this._size].padding}px;
                border: none;
                border-radius: var(${shape});

                background-color: var(--md-sys-color-surface-container-low);
                box-shadow: 0px var(--md-sys-elevation-level1) calc(var(--md-sys-elevation-level1) * 2) 0px color-mix(in srgb, var(--md-sys-color-shadow) 30%, transparent);

                color: var(--md-sys-color-primary);

                font-family: var(${MEASUREMENTS[this._size].font});
                font-weight: var(${MEASUREMENTS[this._size].fontWeight});
                font-size: ${MEASUREMENTS[this._size].fontSize}px;
                line-height: ${MEASUREMENTS[this._size].lineHeight}px;
                letter-spacing: ${MEASUREMENTS[this._size].fontTracking}px;
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