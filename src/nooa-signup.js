/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-signup`
 * Sign up page for Nittany Offensive Operations Association
 * 
 * @demo index.html
 * @element nooa-signup
 */
export class NooaSignup extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-signup";
  }

  constructor() {
    super();
    this.email = "";
    this.password = "";
    this.username = "";
  }

  static get properties() {
    return {
      ...super.properties,
      email: { type: String },
      password: { type: String },
      username: { type: String }
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
      .signup-container {
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
      .signup-form {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-4);
      }
      input {
        padding: var(--ddd-spacing-3);
        border: 2px solid var(--ddd-theme-default-error);
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-m);
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
      .login-link {
        text-align: center;
        margin-top: var(--ddd-spacing-4);
        color: var(--ddd-theme-default-error);
      }
      .login-link a {
        color: var(--ddd-theme-default-nittanyNavy);
        text-decoration: none;
        font-weight: var(--ddd-font-weight-bold);
      }
      .login-link a:hover {
        text-decoration: underline;
      }
    `];
  }

  handleInput(e, field) {
    this[field] = e.target.value;
  }

  handleSubmit() {
    this.dispatchEvent(new CustomEvent('signup-submit', {
      detail: { 
        email: this.email,
        password: this.password,
        username: this.username
      },
      bubbles: true,
      composed: true
    }));
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path: '/login' },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="signup-container">
        <h1>Sign Up for NOOA</h1>
        <form class="signup-form" @submit="${(e) => { e.preventDefault(); this.handleSubmit(); }}">
          <input 
            type="text" 
            placeholder="Username"
            .value="${this.username}"
            @input="${(e) => this.handleInput(e, 'username')}"
            required>
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
          <button type="submit">Sign Up</button>
        </form>
        <div class="login-link">
          Already have an account? <a href="/login" @click="${this.handleLoginClick}">Login</a>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaSignup.tag, NooaSignup);

