var T = Object.defineProperty;
var A = (s, t, n) => t in s ? T(s, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : s[t] = n;
var u = (s, t, n) => A(s, typeof t != "symbol" ? t + "" : t, n);
const B = () => (s) => class extends s {
  constructor(...t) {
    super(...t), Reflect.ownKeys(this).forEach((a) => {
      if (a.startsWith("_")) {
        const o = a.toString().slice(1);
        Object.defineProperty(this, o, {
          get: () => this[a],
          set: (i) => {
            this[a] = i;
          },
          enumerable: !0,
          configurable: !0
        });
      }
    });
  }
}, e = {
  Primary: "--md-sys-color-primary",
  OnPrimary: "--md-sys-color-on-primary",
  SecondaryContainer: "--md-sys-color-secondary-container",
  OnSecondaryContainer: "--md-sys-color-on-secondary-container",
  OnSurface: "--md-sys-color-on-surface",
  OnSurfaceVariant: "--md-sys-color-on-surface-variant",
  OutlineVariant: "--md-sys-color-outline-variant",
  Shadow: "--md-sys-color-shadow",
  SurfaceContainerLow: "--md-sys-color-surface-container-low"
}, m = {
  Level0: 0,
  Level1: 1,
  Level2: 2
};
function M() {
  document.documentElement.style.setProperty("--md-sys-elevation-level0", "0px"), document.documentElement.style.setProperty("--md-sys-elevation-level1", "1px"), document.documentElement.style.setProperty("--md-sys-elevation-level2", "3px"), document.documentElement.style.setProperty("--md-sys-elevation-level3", "6px"), document.documentElement.style.setProperty("--md-sys-elevation-level4", "8px"), document.documentElement.style.setProperty("--md-sys-elevation-level5", "12px");
}
const w = {
  Brand: "--md-ref-typeface-brand",
  Plain: "--md-ref-typeface-plain"
}, O = {
  Regular: "--md-ref-typeface-weight-regular",
  Medium: "--md-ref-typeface-weight-medium"
};
function H() {
  document.documentElement.style.setProperty("--md-ref-typeface-brand", "Roboto"), document.documentElement.style.setProperty("--md-ref-typeface-plain", "Roboto"), document.documentElement.style.setProperty("--md-ref-typeface-weight-regular", "400"), document.documentElement.style.setProperty("--md-ref-typeface-weight-medium", "500");
}
const l = {
  Circular: "--md-sys-shape-corner-full",
  Medium: "--md-sys-shape-corner-medium",
  Large: "--md-sys-shape-corner-large",
  LargeIncreased: "--md-sys-shape-corner-large-increased",
  ExtraLarge: "--md-sys-shape-corner-extra-large"
};
function F() {
  document.documentElement.style.setProperty("--md-sys-shape-corner-full", "999px"), document.documentElement.style.setProperty("--md-sys-shape-corner-medium", "12px"), document.documentElement.style.setProperty("--md-sys-shape-corner-large", "16px"), document.documentElement.style.setProperty("--md-sys-shape-corner-large-increased", "20px"), document.documentElement.style.setProperty("--md-sys-shape-corner-extra-large", "28px");
}
const k = {
  elevated: {
    enabled: {
      container: e.SurfaceContainerLow,
      shadow: e.Shadow,
      elevation: m.Level1,
      labelColor: e.Primary,
      iconColor: e.Primary
    },
    disabled: {
      container: e.OnSurface,
      containerOpacity: 0.1,
      elevation: m.Level0,
      shadow: e.Shadow,
      labelColor: e.OnSurface,
      labelOpacity: 0.38,
      iconColor: e.OnSurface,
      iconOpacity: 0.38
    },
    hovered: {
      container: e.SurfaceContainerLow,
      stateLayer: e.Primary,
      stateLayerOpacity: 0.08,
      elevation: m.Level2,
      shadow: e.Shadow,
      labelColor: e.Primary,
      iconColor: e.Primary
    }
  },
  filled: {
    enabled: {
      container: e.Primary,
      shadow: e.Shadow,
      elevation: m.Level0,
      labelColor: e.OnPrimary,
      iconColor: e.OnPrimary
    },
    disabled: {
      container: e.OnSurface,
      containerOpacity: 0.1,
      elevation: m.Level0,
      shadow: e.Shadow,
      labelColor: e.OnSurface,
      labelOpacity: 0.38,
      iconColor: e.OnSurface,
      iconOpacity: 0.38
    },
    hovered: {
      container: e.Primary,
      stateLayer: e.OnPrimary,
      stateLayerOpacity: 0.08,
      elevation: m.Level1,
      shadow: e.Shadow,
      labelColor: e.OnPrimary,
      iconColor: e.OnPrimary
    }
  },
  tonal: {
    enabled: {
      container: e.SecondaryContainer,
      shadow: e.Shadow,
      elevation: m.Level0,
      labelColor: e.OnSecondaryContainer,
      iconColor: e.OnSecondaryContainer
    },
    disabled: {
      container: e.OnSurface,
      containerOpacity: 0.1,
      elevation: m.Level0,
      shadow: e.Shadow,
      labelColor: e.OnSurface,
      labelOpacity: 0.38,
      iconColor: e.OnSurface,
      iconOpacity: 0.38
    },
    hovered: {
      container: e.SecondaryContainer,
      stateLayer: e.OnSecondaryContainer,
      stateLayerOpacity: 0.08,
      elevation: m.Level1,
      labelColor: e.OnSecondaryContainer,
      iconColor: e.OnSecondaryContainer,
      shadow: e.Shadow
    }
  },
  outlined: {
    enabled: {
      outline: e.OutlineVariant,
      labelColor: e.OnSurfaceVariant,
      iconColor: e.OnSurfaceVariant,
      shadow: e.Shadow
    },
    disabled: {
      container: e.OnSurface,
      containerOpacity: 0.1,
      labelColor: e.OnSurface,
      labelOpacity: 0.38,
      iconColor: e.OnSurface,
      iconOpacity: 0.38,
      shadow: e.Shadow
    },
    hovered: {
      container: e.OutlineVariant,
      stateLayer: e.OnSurfaceVariant,
      stateLayerOpacity: 0.08,
      outline: e.OutlineVariant,
      labelColor: e.OnSurfaceVariant,
      iconColor: e.OnSurfaceVariant,
      shadow: e.Shadow
    }
  },
  standard: {
    enabled: {
      labelColor: e.Primary,
      iconColor: e.Primary,
      shadow: e.Shadow
    },
    disabled: {
      container: e.OnSurface,
      containerOpacity: 0.1,
      labelColor: e.OnSurface,
      labelOpacity: 0.38,
      iconColor: e.OnSurface,
      iconOpacity: 0.38,
      shadow: e.Shadow
    },
    hovered: {
      stateLayer: e.Primary,
      stateLayerOpacity: 0.08,
      labelColor: e.Primary,
      iconColor: e.Primary,
      shadow: e.Shadow
    }
  }
}, c = {
  extra_small: {
    height: 32,
    padding: 12,
    separator: 4,
    roundBorderRadius: l.Circular,
    squareBorderRadius: l.Medium,
    iconSize: 20,
    font: w.Plain,
    fontWeight: O.Medium,
    fontSize: 14,
    lineHeight: 20,
    fontTracking: 0.1
    // leading space
    // trailing space
    // spring animation damping
    // spring animation stiffness
  },
  small: {
    height: 40,
    padding: 16,
    separator: 8,
    roundBorderRadius: l.Circular,
    squareBorderRadius: l.Medium,
    iconSize: 20,
    font: w.Plain,
    fontWeight: O.Medium,
    fontSize: 14,
    lineHeight: 20,
    fontTracking: 0.1
  },
  medium: {
    height: 56,
    padding: 24,
    separator: 8,
    roundBorderRadius: l.Circular,
    squareBorderRadius: l.Large,
    iconSize: 24,
    font: w.Plain,
    fontWeight: O.Medium,
    fontSize: 16,
    lineHeight: 24,
    fontTracking: 0.15
  },
  large: {
    height: 96,
    padding: 48,
    separator: 12,
    roundBorderRadius: l.Circular,
    squareBorderRadius: l.ExtraLarge,
    iconSize: 32,
    font: w.Brand,
    fontWeight: O.Regular,
    fontSize: 24,
    lineHeight: 32,
    fontTracking: 0
  },
  extra_large: {
    height: 136,
    padding: 64,
    separator: 16,
    roundBorderRadius: l.Circular,
    squareBorderRadius: l.ExtraLarge,
    iconSize: 40,
    font: w.Brand,
    fontWeight: O.Regular,
    fontSize: 32,
    lineHeight: 40,
    fontTracking: 0
  }
};
var N = Object.getOwnPropertyDescriptor, V = (s, t, n, a) => {
  for (var o = a > 1 ? void 0 : a ? N(t, n) : t, i = s.length - 1, d; i >= 0; i--)
    (d = s[i]) && (o = d(o) || o);
  return o;
};
let S = class extends HTMLElement {
  constructor() {
    super();
    u(this, "_size", "medium");
    u(this, "_shape", "round");
    u(this, "_color", "filled");
    u(this, "_icon", null);
    u(this, "_disabled", !1);
    u(this, "state", "enabled");
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["type", "size", "shape", "color", "icon", "disabled"];
  }
  attributeChangedCallback(t, n, a) {
    S.observedAttributes.includes(t) && n !== a && (this[t] = a, this.updateContent());
  }
  connectedCallback() {
    this.updateContent();
  }
  updateContent() {
    var _, P, R, z;
    for (; (_ = this.shadowRoot) != null && _.firstChild; )
      this.shadowRoot.removeChild(this.shadowRoot.firstChild);
    const t = document.createElement("button"), n = document.createElement("style"), a = this._shape === "round" ? c[this._size].roundBorderRadius : c[this._size].squareBorderRadius;
    this._disabled = this.hasAttribute("disabled"), this._disabled && (this.state = "disabled");
    const o = k[this._color][this.state], i = o.container ? o.containerOpacity ? `background-color: color-mix(in srgb, var(${o.container}) ${o.containerOpacity * 100}%, transparent);` : `background-color: var(${o.container});` : "", d = o.labelOpacity ? `color: color-mix(in srgb, var(${o.labelColor}) ${o.labelOpacity * 100}%, transparent);` : `color: var(${o.labelColor});`, y = o.elevation ? `box-shadow: 0px var(--md-sys-elevation-level${o.elevation}) calc(var(--md-sys-elevation-level${o.elevation}) * 2) 0px color-mix(in srgb, var(${o.shadow}) 30%, transparent);` : "", p = o.outline ? `border: 1px solid var(${o.outline});` : "border: none;";
    let h = "", f = "", b = "", g = "", v = "", C = "";
    if (this.state !== "disabled") {
      h = "cursor: pointer;";
      const r = k[this._color].hovered;
      f = r.container ? r.containerOpacity ? `background-color: color-mix(in srgb, var(${r.container}) ${r.containerOpacity * 100}%, transparent);` : `background-color: var(${r.container});` : "", b = r.stateLayer && r.stateLayerOpacity ? `background-image: linear-gradient(color-mix(in srgb, var(${r.stateLayer}) ${r.stateLayerOpacity * 100}%, transparent), color-mix(in srgb, var(${r.stateLayer}) ${r.stateLayerOpacity * 100}%, transparent));` : "", g = r.outline ? `border: 1px solid var(${r.outline});` : "border: none;", v = `color: var(${r.labelColor});`, C = r.elevation ? `box-shadow: 0px var(--md-sys-elevation-level${r.elevation}) calc(var(--md-sys-elevation-level${r.elevation}) * 2) 0px color-mix(in srgb, var(${r.shadow}) 30%, transparent);` : "";
    }
    n.textContent = `
            button {
                height: ${c[this._size].height}px;
                padding: 0 ${c[this._size].padding}px;
                border-radius: var(${a});

                ${p}
                ${i}
                ${d}
                ${y}

                font-family: var(${c[this._size].font});
                font-weight: var(${c[this._size].fontWeight});
                font-size: ${c[this._size].fontSize}px;
                line-height: ${c[this._size].lineHeight}px;
                letter-spacing: ${c[this._size].fontTracking}px;
            }

            button:hover {
                ${h}
                ${f}
                ${b}
                ${g}
                ${v}
                ${C}
            }
        `;
    const $ = document.createElement("div");
    if ($.className = "text-container", this.textContent && ($.innerText = this.textContent), this._icon) {
      n.textContent += `
                button {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .material-symbols-outlined {
                    font-size: ${c[this._size].iconSize}px;
                    margin-right: ${c[this._size].separator}px;
                }
            `;
      const r = document.createElement("link");
      r.rel = "stylesheet", r.href = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${this._icon}`, (P = this.shadowRoot) == null || P.appendChild(r);
      const L = document.createElement("span");
      L.className = "material-symbols-outlined", L.textContent = this._icon, t.appendChild(L);
    }
    t.appendChild($), (R = this.shadowRoot) == null || R.appendChild(n), (z = this.shadowRoot) == null || z.appendChild(t);
  }
};
S = V([
  B()
], S);
class E extends HTMLElement {
  static get observedAttributes() {
    return ["inset", "inset-start", "inset-end"];
  }
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.updateContent();
  }
  attributeChangedCallback(t, n, a) {
    E.observedAttributes.includes(t) && n !== a && (this[t] = a, this.updateContent());
  }
  updateContent() {
    var y, p, h;
    for (; (y = this.shadowRoot) != null && y.firstChild; )
      this.shadowRoot.removeChild(this.shadowRoot.firstChild);
    const t = document.createElement("div"), n = document.createElement("style"), a = `background-color: var(${e.OutlineVariant});`;
    let o = "0", i = "0", d = "100%";
    (this.hasAttribute("inset") || this.hasAttribute("inset-start")) && (o = "16px"), (this.hasAttribute("inset") || this.hasAttribute("inset-end")) && (i = "16px"), (o !== "0" || i !== "0") && (d = `calc(100% - ${o} - ${i})`), n.textContent = `
            div {
            width: ${d};
            ${a}
            height: 1px;
            margin-left: ${o};
            margin-right: ${i};
            margin-bottom: 8px;
            }
        `, (p = this.shadowRoot) == null || p.appendChild(n), (h = this.shadowRoot) == null || h.appendChild(t);
  }
}
const W = {
  default: {
    height: 56,
    width: 56,
    iconSize: 24,
    shape: l.Large
  },
  medium: {
    height: 80,
    width: 80,
    iconSize: 28,
    shape: l.LargeIncreased
  },
  large: {
    height: 96,
    width: 96,
    iconSize: 36,
    shape: l.ExtraLarge
  }
};
var D = Object.getOwnPropertyDescriptor, q = (s, t, n, a) => {
  for (var o = a > 1 ? void 0 : a ? D(t, n) : t, i = s.length - 1, d; i >= 0; i--)
    (d = s[i]) && (o = d(o) || o);
  return o;
};
let x = class extends HTMLElement {
  constructor() {
    super();
    u(this, "_size", "default");
    u(this, "_icon", "");
    this.attachShadow({ mode: "open" });
  }
  static get observedAttributes() {
    return ["size", "icon"];
  }
  connectedCallback() {
    this.updateContent();
  }
  attributeChangedCallback(t, n, a) {
    x.observedAttributes.includes(t) && n !== a && (this[t] = a, this.updateContent());
  }
  updateContent() {
    var b, g, v, C;
    for (; (b = this.shadowRoot) != null && b.firstChild; )
      this.shadowRoot.removeChild(this.shadowRoot.firstChild);
    const t = document.createElement("div");
    t.classList.add("fab-parent");
    const n = document.createElement("button"), a = W[this._size], o = a.height, i = a.width, d = a.iconSize, y = a.shape, p = document.createElement("style");
    p.innerText = `
            button {
                display: flex;
                align-items: center;
                justify-content: center;
                border: none;
                position: absolute;
                bottom: 16px;
                right: 16px;
                height: ${o}px;
                width: ${i}px;
                border-radius: var(${y});
            }

            button:hover {
                cursor: pointer;
            }

            .material-symbols-outlined {
                font-size: ${d}px;
            }

            .fab-parent {
                position: relative;
                width: 100%;
                height: 100%;
            }
        `;
    const h = document.createElement("link");
    h.rel = "stylesheet", h.href = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=${this._icon}`, (g = this.shadowRoot) == null || g.appendChild(h);
    const f = document.createElement("span");
    f.className = "material-symbols-outlined", f.textContent = this._icon, n.appendChild(f), t.appendChild(n), (v = this.shadowRoot) == null || v.appendChild(p), (C = this.shadowRoot) == null || C.appendChild(t);
  }
};
x = q([
  B()
], x);
function j() {
  H(), M(), F();
}
window.customElements.define("md-button", S);
window.customElements.define("md-divider", E);
window.customElements.define("md-fab", x);
j();
export {
  S as Button,
  E as Divider,
  x as Fab
};
