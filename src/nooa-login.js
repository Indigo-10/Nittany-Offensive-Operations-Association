/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-login`
 * Login page for Nittany Offensive Operations Association
 * 
 * @demo index.html
 * @element nooa-login
 */
export class NooaLogin extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-login";
  }

  constructor() {
    super();
    this.email = "";
    this.password = "";
  }

  static get properties() {
    return {
      ...super.properties,
      email: { type: String },
      password: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        max-width: 400px;
        margin: 0 auto;
        padding: var(--ddd-spacing-8) var(--ddd-spacing-4);
      }
      .login-container {
        background-color: var(--ddd-theme-default-roarLight);
        border: 2px solid var(--ddd-theme-default-error);
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-6);
        box-shadow: var(--ddd-boxShadow-md);
      }
      h1 {
        color: var(--ddd-theme-default-error);
        font-size: var(--ddd-font-size-2xl);
        margin-bottom: var(--ddd-spacing-4);
        text-align: center;
      }
      .login-form {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-4);
      }
      input {
        padding: var(--ddd-spacing-3);
        border: 2px solid var(--ddd-theme-default-error);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-m);
        width: 100%;
        box-sizing: border-box;
      }
      input:focus {
        outline: none;
        border-color: var(--ddd-theme-default-nittanyNavy);
      }
      button {
        padding: var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-error);
        color: var(--ddd-theme-default-roarLight);
        border: none;
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      button:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      .signup-link {
        text-align: center;
        margin-top: var(--ddd-spacing-4);
        color: var(--ddd-theme-default-error);
      }
      .signup-link a {
        color: var(--ddd-theme-default-nittanyNavy);
        text-decoration: none;
        font-weight: var(--ddd-font-weight-bold);
      }
      .signup-link a:hover {
        text-decoration: underline;
      }
      
      /* Mobile styles */
      @media (max-width: 480px) {
        :host {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-3);
        }
        .login-container {
          padding: var(--ddd-spacing-4);
        }
        h1 {
          font-size: var(--ddd-font-size-xl);
        }
      }
    `];
  }

  handleInput(e, field) {
    this[field] = e.target.value;
  }

  handleSubmit() {
    this.dispatchEvent(new CustomEvent('login-submit', {
      detail: { 
        email: this.email,
        password: this.password
      },
      bubbles: true,
      composed: true
    }));
  }

  handleSignupClick(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path: '/signup' },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="login-container">
        <h1>Login to NOOA</h1>
        <form class="login-form" @submit="${(e) => { e.preventDefault(); this.handleSubmit(); }}">
          <input 
            type="email" 
            placeholder="Email"
            .value="${this.email}"
            @input="${(e) => this.handleInput(e, 'email')}"
            required>
          <input 
            type="password" 
            placeholder="Password"
            .value="${this.password}"
            @input="${(e) => this.handleInput(e, 'password')}"
            required>
          <button type="submit">Login</button>
        </form>
        <div class="signup-link">
          Don't have an account? <a href="/signup" @click="${this.handleSignupClick}">Sign up</a>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaLogin.tag, NooaLogin);
