/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-banner`
 * Big banner with photo and call to action
 * 
 * @demo index.html
 * @element nooa-banner
 */
export class NooaBanner extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-banner";
  }

  constructor() {
    super();
    this.title = "Welcome to NOOA";
    this.subtitle = "Join us today and make a difference";
    this.ctaText = "Get Started";
    this.imageUrl = "/assets/NOOA_War_Room_With_Logo.jpg";
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      subtitle: { type: String },
      ctaText: { type: String },
      imageUrl: { type: String }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .banner-container {
        position: relative;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .banner-image {
        width: 100%;
        height: auto;
        display: block;
      }
      .banner-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
      }
      .banner-content {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 2;
        text-align: center;
        color: var(--ddd-theme-default-white);
        padding: var(--ddd-spacing-6);
        max-width: 800px;
        width: 90%;
      }
      .banner-title {
        font-size: var(--ddd-font-size-4xl);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-4);
        text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
      }
      .banner-subtitle {
        font-size: var(--ddd-font-size-xl);
        margin-bottom: var(--ddd-spacing-6);
        text-shadow: 1px 1px 2px rgba(0,0,0,0.5);
      }
      .banner-cta {
        display: inline-block;
        padding: var(--ddd-spacing-4) var(--ddd-spacing-8);
        background-color: var(--ddd-theme-default-error);
        color: var(--ddd-theme-default-roarLight);
        border: none;
        border-radius: var(--ddd-radius-md);
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        cursor: pointer;
        transition: background-color 0.3s ease;
        text-decoration: none;
        box-shadow: var(--ddd-boxShadow-md);
      }
      .banner-cta:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      
      /* Mobile styles */
      @media (max-width: 768px) {
        .banner-title {
          font-size: var(--ddd-font-size-2xl);
        }
        .banner-subtitle {
          font-size: var(--ddd-font-size-m);
        }
        .banner-cta {
          padding: var(--ddd-spacing-3) var(--ddd-spacing-6);
          font-size: var(--ddd-font-size-m);
        }
      }
      @media (max-width: 480px) {
        .banner-content {
          padding: var(--ddd-spacing-4);
        }
        .banner-title {
          font-size: var(--ddd-font-size-xl);
        }
        .banner-subtitle {
          font-size: var(--ddd-font-size-s);
          margin-bottom: var(--ddd-spacing-4);
        }
        .banner-cta {
          padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
          font-size: var(--ddd-font-size-s);
        }
      }
    `];
  }

  handleCtaClick(e) {
    e.preventDefault();
    this.dispatchEvent(new CustomEvent('navigate', {
      detail: { path: '/signup' },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="banner-container">
        <img src="${this.imageUrl}" alt="Banner" class="banner-image">
        <div class="banner-overlay"></div>
        <div class="banner-content">
          <h1 class="banner-title">${this.title}</h1>
          <p class="banner-subtitle">${this.subtitle}</p>
          <a href="#" class="banner-cta" @click="${this.handleCtaClick}">
            ${this.ctaText}
          </a>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaBanner.tag, NooaBanner);
