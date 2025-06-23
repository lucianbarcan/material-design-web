import { Divider, Button } from "./components";
import { Fab } from "./components/fab/Fab";
import { loadTokens } from "./styling/tokens";

// Register custom elements
window.customElements.define('md-button', Button);
window.customElements.define('md-divider', Divider);
window.customElements.define('md-fab', Fab);

loadTokens();

// Export components
export {
  Button,
  Divider,
  Fab
}

// Add type information to the global namespace
declare global {
  interface HTMLElementTagNameMap {
    'md-button': Button;
    'md-divider': Divider;
    'md-fab': Fab;
  }

  // This helps for direct property setting on DOM elements
  interface HTMLElementEventMap {
    'button-event': CustomEvent<any>; // Add any custom events here
  }
}