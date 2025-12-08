/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-menu`
 * Hamburger menu component for navigation
 * 
 * @demo index.html
 * @element nooa-menu
 */
export class NooaMenu extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-menu";
  }

  constructor() {
    super();
    this.open = false;
    this.currentRoute = "/";
    this.menuItems = [
      { path: "/", label: "Home" },
      { path: "/services", label: "Services" },
      { path: "/schedule", label: "Schedule" },
      { path: "/login", label: "Login" },
      { path: "/signup", label: "Sign Up" },
      { path: "/register", label: "Register" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      open: { type: Boolean },
      currentRoute: { type: String },
      menuItems: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        position: relative;
      }
      .menu-button {
        position: fixed;
        top: var(--ddd-spacing-4);
        left: var(--ddd-spacing-4);
        z-index: 1001;
        background-color: var(--ddd-theme-default-error);
        border: none;
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-3);
        cursor: pointer;
        display: flex;
        flex-direction: column;
        gap: 4px;
        box-shadow: var(--ddd-boxShadow-md);
        transition: background-color 0.3s ease;
      }
      .menu-button:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      .menu-line {
        width: 24px;
        height: 3px;
        background-color: var(--ddd-theme-default-roarLight);
        border-radius: 2px;
        transition: all 0.3s ease;
      }
      .menu-button.open .menu-line:nth-child(1) {
        transform: rotate(45deg) translate(8px, 8px);
      }
      .menu-button.open .menu-line:nth-child(2) {
        opacity: 0;
      }
      .menu-button.open .menu-line:nth-child(3) {
        transform: rotate(-45deg) translate(7px, -7px);
      }
      .menu-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        opacity: 0;
        visibility: hidden;
        transition: opacity 0.3s ease, visibility 0.3s ease;
      }
      .menu-overlay.visible {
        opacity: 1;
        visibility: visible;
      }
      .menu-drawer {
        position: fixed;
        top: 0;
        left: 0;
        width: 280px;
        height: 100%;
        background-color: var(--ddd-theme-default-error);
        z-index: 1000;
        transform: translateX(-100%);
        transition: transform 0.3s ease;
        box-shadow: var(--ddd-boxShadow-lg);
        padding: var(--ddd-spacing-6) var(--ddd-spacing-4);
        overflow-y: auto;
      }
      .menu-drawer.open {
        transform: translateX(0);
      }
      .menu-header {
        color: var(--ddd-theme-default-roarLight);
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-6);
        padding-bottom: var(--ddd-spacing-4);
        border-bottom: 2px solid var(--ddd-theme-default-roarLight);
      }
      .menu-items {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-2);
      }
      .menu-item {
        padding: var(--ddd-spacing-4);
        color: var(--ddd-theme-default-roarLight);
        text-decoration: none;
        border-radius: var(--ddd-radius-sm);
        transition: background-color 0.3s ease;
        font-weight: var(--ddd-font-weight-medium);
        cursor: pointer;
      }
      .menu-item:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      .menu-item.active {
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      
      /* Mobile styles */
      @media (max-width: 480px) {
        .menu-button {
          top: var(--ddd-spacing-2);
          left: var(--ddd-spacing-2);
          padding: var(--ddd-spacing-2);
        }
        .menu-line {
          width: 20px;
        }
        .menu-drawer {
          width: 260px;
        }
      }
    `];
  }

  toggleMenu() {
    this.open = !this.open;
  }

  closeMenu() {
    this.open = false;
  }

  handleClick(e, path) {
    e.preventDefault();
    this.closeMenu();
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <button 
        class="menu-button ${this.open ? 'open' : ''}"
        @click="${this.toggleMenu}"
        aria-label="Toggle menu">
        <div class="menu-line"></div>
        <div class="menu-line"></div>
        <div class="menu-line"></div>
      </button>
      <div 
        class="menu-overlay ${this.open ? 'visible' : ''}"
        @click="${this.closeMenu}">
      </div>
      <div class="menu-drawer ${this.open ? 'open' : ''}">
        <div class="menu-header">NOOA</div>
        <nav class="menu-items">
          ${this.menuItems.map(item => html`
            <a 
              href="${item.path}"
              class="menu-item ${this.currentRoute === item.path ? 'active' : ''}"
              @click="${(e) => this.handleClick(e, item.path)}">
              ${item.label}
            </a>
          `)}
        </nav>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaMenu.tag, NooaMenu);
