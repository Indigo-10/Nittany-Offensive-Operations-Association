/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-footer`
 * Footer component with About Us, Contact Us, Powered By
 * 
 * @demo index.html
 * @element nooa-footer
 */
export class NooaFooter extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-footer";
  }

  constructor() {
    super();
    this.year = new Date().getFullYear();
  }

  static get properties() {
    return {
      ...super.properties,
      year: { type: Number }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-roarLight);
        margin-top: var(--ddd-spacing-8);
      }
      .footer-wrapper {
        max-width: 1200px;
        margin: 0 auto;
        padding: var(--ddd-spacing-6);
      }
      .footer-content {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: var(--ddd-spacing-6);
        margin-bottom: var(--ddd-spacing-4);
      }
      .footer-section h3 {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-3);
        color: var(--ddd-theme-default-roarLight);
      }
      .footer-section a {
        display: block;
        color: var(--ddd-theme-default-roarLight);
        text-decoration: none;
        margin-bottom: var(--ddd-spacing-2);
        transition: opacity 0.3s ease;
        opacity: 0.8;
      }
      .footer-section a:hover {
        opacity: 1;
        text-decoration: underline;
      }
      .powered-by {
        text-align: center;
        padding-top: var(--ddd-spacing-4);
        border-top: 1px solid var(--ddd-theme-default-roarLight);
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-roarLight);
      }
      
      /* Mobile styles */
      @media (max-width: 600px) {
        .footer-content {
          grid-template-columns: 1fr;
          gap: var(--ddd-spacing-4);
        }
        .footer-wrapper {
          padding: var(--ddd-spacing-4);
        }
      }
    `];
  }

  render() {
    return html`
      <div class="footer-wrapper">
        <div class="footer-content">
          <div class="footer-section">
            <h3>About Us</h3>
            <a href="#about">Our Story</a>
            <a href="#mission">Our Mission</a>
            <a href="#team">Our Team</a>
          </div>
          <div class="footer-section">
            <h3>Contact Us</h3>
            <a href="#contact">Get in Touch</a>
            <a href="#support">Support</a>
            <a href="#feedback">Feedback</a>
          </div>
        </div>
        <div class="powered-by">
          Powered By Nittany Offensive Operations Association © ${this.year}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaFooter.tag, NooaFooter);
