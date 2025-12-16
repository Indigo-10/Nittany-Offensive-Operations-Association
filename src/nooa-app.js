/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./nooa-menu.js";
import "./nooa-header.js";
import "./nooa-home.js";
import "./nooa-schedule.js";
import "./nooa-services.js";
import "./nooa-login.js";
import "./nooa-signup.js";
import "./nooa-register.js";
import "./nooa-footer.js";

/**
 * `nooa-app`
 * Main application container with routing for Nittany Offensive Operations Association
 * 
 * @demo index.html
 * @element nooa-app
 */
export class NooaApp extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-app";
  }

  constructor() {
    super();
    this.route = window.location.pathname || "/";
    this.isDarkMode = false;
    this.initRouting();
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
      isDarkMode: { type: Boolean },
    };
  }

  // theme toggle functionality
  _toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this._applyTheme();
    this._saveThemePreference();
  }

  _applyTheme() {
    if (this.isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  _saveThemePreference() {
    localStorage.setItem('nooa-theme', this.isDarkMode ? 'dark' : 'light');
  }

  _loadThemePreference() {
    const savedTheme = localStorage.getItem('nooa-theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
      this._applyTheme();
    } else {
      // check system preference
      this.isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      this._applyTheme();
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this._loadThemePreference();
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--nooa-bg-primary, var(--ddd-theme-default-roarLight));
        overflow-x: hidden;
        max-width: 100vw;
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 100%;
        overflow-x: hidden;
        position: relative;
        background-color: var(--nooa-bg-primary, var(--ddd-theme-default-roarLight));
        color: var(--nooa-text-primary, var(--ddd-theme-default-coalyGray));
        transition: background-color 0.3s ease, color 0.3s ease;
      }

      .content {
        flex: 1;
        padding: 0;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
      }

      /* theme toggle button - top right */
      .theme-toggle {
        position: fixed;
        top: var(--ddd-spacing-3);
        right: var(--ddd-spacing-3);
        z-index: 1000;
      }

      .theme-toggle button {
        padding: var(--ddd-spacing-2) var(--ddd-spacing-3);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-md);
        background-color: var(--nooa-card-bg, var(--ddd-theme-default-white));
        color: var(--nooa-text-primary, var(--ddd-theme-default-coalyGray));
        font-weight: var(--ddd-font-weight-bold);
        font-size: var(--ddd-font-size-s);
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: var(--ddd-spacing-2);
        box-shadow: var(--ddd-boxShadow-sm);
      }

      .theme-toggle button:hover {
        transform: scale(1.05);
        box-shadow: var(--ddd-boxShadow-md);
      }

      .theme-icon {
        font-size: 1.2rem;
      }

      @media (max-width: 768px) {
        .theme-toggle {
          top: var(--ddd-spacing-2);
          right: var(--ddd-spacing-2);
        }
        .theme-toggle button {
          padding: var(--ddd-spacing-1) var(--ddd-spacing-2);
          font-size: var(--ddd-font-size-xs);
        }
        .theme-icon {
          font-size: 1rem;
        }
      }
    `];
  }

  initRouting() {
    // Handle initial page load
    this.route = window.location.pathname;
    
    // Handle browser back/forward
    window.addEventListener('popstate', () => {
      this.route = window.location.pathname;
    });
  }

  handleNavigation(e) {
    if (e.detail && e.detail.path) {
      // Extract path without hash for routing
      const fullPath = e.detail.path;
      const [path, hash] = fullPath.split('#');
      this.route = path;
      window.history.pushState({}, "", fullPath);
      
      // If there's a hash, scroll to it after a short delay
      if (hash) {
        setTimeout(() => {
          window.location.hash = hash;
        }, 100);
      }
    }
  }

  renderPage() {
    switch(this.route) {
      case '/schedule':
        return html`<nooa-schedule></nooa-schedule>`;
      case '/services':
        return html`<nooa-services></nooa-services>`;
      case '/login':
        return html`<nooa-login @navigate="${this.handleNavigation}"></nooa-login>`;
      case '/signup':
        return html`<nooa-signup @navigate="${this.handleNavigation}"></nooa-signup>`;
      case '/register':
        return html`<nooa-register @navigate="${this.handleNavigation}"></nooa-register>`;
      default:
        return html`<nooa-home @navigate="${this.handleNavigation}"></nooa-home>`;
    }
  }

  render() {
    return html`
      <div class="app-container">
        <div class="theme-toggle">
          <button @click="${this._toggleTheme}" title="toggle theme">
            <span class="theme-icon">${this.isDarkMode ? '☀️' : '🌙'}</span>
            <span>${this.isDarkMode ? 'light' : 'dark'}</span>
          </button>
        </div>
        <nooa-header></nooa-header>
        <nooa-menu 
          .currentRoute="${this.route}"
          @navigate="${this.handleNavigation}">
        </nooa-menu>
        <div class="content">
          ${this.renderPage()}
        </div>
        <nooa-footer></nooa-footer>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaApp.tag, NooaApp);
