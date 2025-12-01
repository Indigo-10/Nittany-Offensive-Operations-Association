/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-header`
 * Header component with logo and association name
 * 
 * @demo index.html
 * @element nooa-header
 */
export class NooaHeader extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-header";
  }

  constructor() {
    super();
    this.logoUrl = "/assets/logo.png";
    this.associationName = "Nittany Offensive Operations Association";
  }

  static get properties() {
    return {
      ...super.properties,
      logoUrl: { type: String },
      associationName: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        max-width: 100vw;
        background-color: var(--ddd-theme-default-error);
        color: var(--ddd-theme-default-roarLight);
        padding: var(--ddd-spacing-2);
        overflow: hidden;
      }
      .header-container {
        max-width: 100%;
        margin: 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        gap: var(--ddd-spacing-4);
        padding-left: 60px;
        padding-right: var(--ddd-spacing-4);
      }
      .logo-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
      }
      .logo {
        max-width: 120px;
        max-height: 80px;
        width: auto;
        height: auto;
        object-fit: contain;
      }
      .logo-placeholder {
        width: 120px;
        height: 80px;
        background-color: var(--ddd-theme-default-roarLight);
        border: 2px dashed var(--ddd-theme-default-nittanyNavy);
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--ddd-theme-default-error);
        font-size: var(--ddd-font-size-xs);
        text-align: center;
        padding: var(--ddd-spacing-1);
      }
      .association-name {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        text-align: left;
        color: var(--ddd-theme-default-roarLight);
        text-transform: uppercase;
        letter-spacing: 1px;
        flex: 1;
        white-space: nowrap;
        line-height: 1.2;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      @media (max-width: 900px) {
        .association-name {
          white-space: normal;
          font-size: var(--ddd-font-size-l);
        }
        .logo {
          max-width: 80px;
          max-height: 60px;
        }
        .header-container {
          padding-left: 50px;
        }
      }
    `];
  }

  render() {
    return html`
      <div class="header-container">
        <div class="logo-container">
          ${this.logoUrl ? html`
            <img src="${this.logoUrl}" alt="NOOA Logo" class="logo">
          ` : html`
            <div class="logo-placeholder">
              Association Logo
            </div>
          `}
        </div>
        <div class="association-name">${this.associationName}</div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaHeader.tag, NooaHeader);

