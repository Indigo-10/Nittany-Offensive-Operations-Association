/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-dropdown`
 * Dropdown menu component
 * 
 * @demo index.html
 * @element nooa-dropdown
 */
export class NooaDropdown extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-dropdown";
  }

  constructor() {
    super();
    this.label = "Select Option";
    this.options = [
      { value: "option1", text: "Option 1" },
      { value: "option2", text: "Option 2" },
      { value: "option3", text: "Option 3" }
    ];
    this.selectedValue = "";
    this.open = false;
  }

  static get properties() {
    return {
      ...super.properties,
      label: { type: String },
      options: { type: Array },
      selectedValue: { type: String },
      open: { type: Boolean }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        position: relative;
      }
      .dropdown-wrapper {
        position: relative;
        display: inline-block;
        width: 100%;
      }
      .dropdown-button {
        width: 100%;
        padding: var(--ddd-spacing-3);
        background-color: var(--ddd-theme-default-white);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-m);
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: var(--ddd-theme-default-coalyGray);
      }
      .dropdown-button:hover {
        background-color: var(--ddd-theme-default-limestoneLight);
      }
      .dropdown-menu {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: var(--ddd-theme-default-white);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-sm);
        box-shadow: var(--ddd-boxShadow-md);
        margin-top: var(--ddd-spacing-1);
        z-index: 1000;
      }
      .dropdown-menu.hidden {
        display: none;
      }
      .dropdown-item {
        padding: var(--ddd-spacing-3);
        cursor: pointer;
        transition: background-color 0.2s ease;
      }
      .dropdown-item:hover {
        background-color: var(--ddd-theme-default-limestoneLight);
      }
      .dropdown-item.selected {
        background-color: var(--ddd-theme-default-error);
        color: var(--ddd-theme-default-roarLight);
      }
    `];
  }

  toggleDropdown() {
    this.open = !this.open;
  }

  selectOption(option) {
    this.selectedValue = option.value;
    this.open = false;
    this.dispatchEvent(new CustomEvent('option-selected', {
      detail: { value: option.value, text: option.text },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    const selectedText = this.options.find(opt => opt.value === this.selectedValue)?.text || this.label;
    return html`
      <div class="dropdown-wrapper">
        <button class="dropdown-button" @click="${this.toggleDropdown}">
          <span>${selectedText}</span>
          <span>▼</span>
        </button>
        <div class="dropdown-menu ${!this.open ? 'hidden' : ''}">
          ${this.options.map(option => html`
            <div 
              class="dropdown-item ${this.selectedValue === option.value ? 'selected' : ''}"
              @click="${() => this.selectOption(option)}">
              ${option.text}
            </div>
          `)}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaDropdown.tag, NooaDropdown);

