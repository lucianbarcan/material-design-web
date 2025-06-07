import Button from "./components/button/button";

// Register custom elements
window.customElements.define('md-button', Button);


// Export components
export {
  Button
}

// Add type information to the global namespace
declare global {
  interface HTMLElementTagNameMap {
    'md-button': Button;
  }

  // This helps for direct property setting on DOM elements
  interface HTMLElementEventMap {
    'button-event': CustomEvent<any>; // Add any custom events here
  }
}