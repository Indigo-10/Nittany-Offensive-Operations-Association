/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-button`
 * Button component
 * 
 * @demo index.html
 * @element nooa-button
 */
export class NooaButton extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-button";
  }

  constructor() {
    super();
    this.label = "Click Me";
    this.variant = "primary";
    this.disabled = false;
  }

  static get properties() {
    return {
      ...super.properties,
      label: { type: String },
      variant: { type: String },
      disabled: { type: Boolean }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: inline-block;
      }
      button {
        padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-medium);
        cursor: pointer;
        transition: all 0.3s ease;
        font-family: var(--ddd-font-navigation);
      }
      button.primary {
        background-color: var(--ddd-theme-default-error);
        color: var(--ddd-theme-default-roarLight);
        border-color: var(--ddd-theme-default-error);
      }
      button.primary:hover:not(:disabled) {
        background-color: var(--ddd-theme-default-nittanyNavy);
        border-color: var(--ddd-theme-default-nittanyNavy);
      }
      button.secondary {
        background-color: var(--ddd-theme-default-roarLight);
        color: var(--ddd-theme-default-nittanyNavy);
        border-color: var(--ddd-theme-default-nittanyNavy);
      }
      button.secondary:hover:not(:disabled) {
        background-color: var(--ddd-theme-default-error);
        color: var(--ddd-theme-default-roarLight);
        border-color: var(--ddd-theme-default-error);
      }
      button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `];
  }

  handleClick() {
    if (!this.disabled) {
      this.dispatchEvent(new CustomEvent('button-click', {
        detail: { label: this.label },
        bubbles: true,
        composed: true
      }));
    }
  }

  render() {
    return html`
      <button 
        class="${this.variant}" 
        ?disabled="${this.disabled}"
        @click="${this.handleClick}">
        ${this.label}
      </button>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaButton.tag, NooaButton);

