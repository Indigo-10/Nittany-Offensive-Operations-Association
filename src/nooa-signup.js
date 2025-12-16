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
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      .signup-container {
        background-color: var(--nooa-card-bg, var(--ddd-theme-default-white));
        border: 2px solid var(--nooa-accent, var(--ddd-theme-default-error));
        border-radius: var(--ddd-radius-lg);
        padding: var(--ddd-spacing-6);
        box-shadow: var(--ddd-boxShadow-md);
        transition: background-color 0.3s ease, border-color 0.3s ease;
      }
      h1 {
        color: var(--nooa-accent, var(--ddd-theme-default-error));
        font-size: var(--ddd-font-size-2xl);
        margin-bottom: var(--ddd-spacing-4);
        text-align: center;
        transition: color 0.3s ease;
      }
      .signup-form {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-4);
      }
      input {
        padding: var(--ddd-spacing-3);
        border: 2px solid var(--nooa-card-border, var(--ddd-theme-default-limestoneLight));
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-m);
        width: 100%;
        box-sizing: border-box;
        background-color: var(--nooa-bg-secondary, var(--ddd-theme-default-white));
        color: var(--nooa-text-primary, var(--ddd-theme-default-coalyGray));
        transition: background-color 0.3s ease, border-color 0.3s ease, color 0.3s ease;
      }
      input:focus {
        outline: none;
        border-color: var(--nooa-link, var(--ddd-theme-default-nittanyNavy));
      }
      button {
        padding: var(--ddd-spacing-4);
        background-color: var(--nooa-accent, var(--ddd-theme-default-error));
        color: var(--ddd-theme-default-white);
        border: none;
        border-radius: var(--ddd-radius-sm);
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        cursor: pointer;
        transition: background-color 0.3s ease;
      }
      button:hover {
        background-color: var(--nooa-link, var(--ddd-theme-default-nittanyNavy));
      }
      .login-link {
        text-align: center;
        margin-top: var(--ddd-spacing-4);
        color: var(--nooa-text-primary, var(--ddd-theme-default-coalyGray));
        transition: color 0.3s ease;
      }
      .login-link a {
        color: var(--nooa-link, var(--ddd-theme-default-nittanyNavy));
        text-decoration: none;
        font-weight: var(--ddd-font-weight-bold);
        transition: color 0.3s ease;
      }
      .login-link a:hover {
        text-decoration: underline;
      }
      
      /* Mobile styles */
      @media (max-width: 480px) {
        :host {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-3);
        }
        .signup-container {
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
