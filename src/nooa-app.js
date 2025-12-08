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
    this.initRouting();
  }

  static get properties() {
    return {
      ...super.properties,
      route: { type: String },
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        min-height: 100vh;
        background-color: var(--ddd-theme-default-roarLight);
        overflow-x: hidden;
        max-width: 100vw;
      }
      .app-container {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        max-width: 100%;
        overflow-x: hidden;
      }
      .content {
        flex: 1;
        padding: 0;
        width: 100%;
        max-width: 100%;
        overflow-x: hidden;
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
