/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-register`
 * Registration page for Nittany Offensive Operations Association
 * 
 * @demo index.html
 * @element nooa-register
 */
export class NooaRegister extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-register";
  }

  constructor() {
    super();
    this.email = "";
    this.password = "";
    this.username = "";
    this.fullName = "";
  }

  static get properties() {
    return {
      ...super.properties,
      email: { type: String },
      password: { type: String },
      username: { type: String },
      fullName: { type: String }
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
      .register-container {
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
      .register-form {
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
      
      /* Mobile styles */
      @media (max-width: 480px) {
        :host {
          padding: var(--ddd-spacing-4) var(--ddd-spacing-3);
        }
        .register-container {
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
    this.dispatchEvent(new CustomEvent('register-submit', {
      detail: { 
        email: this.email,
        password: this.password,
        username: this.username,
        fullName: this.fullName
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
      <div class="register-container">
        <h1>Register for NOOA</h1>
        <form class="register-form" @submit="${(e) => { e.preventDefault(); this.handleSubmit(); }}">
          <input 
            type="text" 
            placeholder="Full Name"
            .value="${this.fullName}"
            @input="${(e) => this.handleInput(e, 'fullName')}"
            required>
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
          <button type="submit">Register</button>
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

globalThis.customElements.define(NooaRegister.tag, NooaRegister);
