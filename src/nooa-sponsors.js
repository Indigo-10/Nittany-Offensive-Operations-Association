/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-sponsors`
 * Sponsors component
 * 
 * @demo index.html
 * @element nooa-sponsors
 */
export class NooaSponsors extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-sponsors";
  }

  constructor() {
    super();
    this.sponsors = [
      { name: "Admiral Nelson", logo: "/assets/admiral.webp", url: "#" },
      { name: "HackTheBox", logo: "/assets/htb.png", url: "https://www.hackthebox.com/" },
      { name: "Your Local Sketchy College Town Drug Dealer", logo: "/assets/sketchy-dealer.webp", url: "#" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      sponsors: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        max-width: 100%;
      }
      .sponsors-container {
        text-align: center;
        width: 100%;
        max-width: 100%;
      }
      h2 {
        font-size: var(--ddd-font-size-2xl);
        color: var(--ddd-theme-default-error);
        margin-bottom: var(--ddd-spacing-6);
      }
      .sponsors-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--ddd-spacing-2);
        width: 100%;
        justify-items: center;
      }
      .sponsor-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: var(--ddd-spacing-3);
        background: var(--ddd-theme-default-nittanyNavy, #001e44) !important;
        border: 2px solid var(--ddd-theme-default-nittanyNavy, #001e44);
        border-radius: var(--ddd-radius-md);
        transition: transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease, border-color 0.3s ease;
        aspect-ratio: 1;
        width: 100%;
        max-width: 380px;
        text-decoration: none;
      }
      @media (max-width: 900px) {
        .sponsors-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .sponsor-item {
          max-width: 300px;
        }
      }
      @media (max-width: 600px) {
        .sponsors-grid {
          grid-template-columns: 1fr;
        }
      }
      .sponsor-item:hover {
        transform: translateY(-4px);
        box-shadow: var(--ddd-boxShadow-md);
        background: var(--ddd-theme-default-error, #bf1e2d) !important;
        border-color: var(--ddd-theme-default-error, #bf1e2d);
      }
      .sponsor-logo {
        max-width: 80%;
        max-height: 60%;
        object-fit: contain;
        margin-bottom: var(--ddd-spacing-2);
      }
      .sponsor-name {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-roarLight);
      }
    `];
  }

  render() {
    return html`
      <div class="sponsors-container">
        <h2>Sponsors</h2>
        <div class="sponsors-grid">
          ${this.sponsors.map(sponsor => html`
            <a href="${sponsor.url}" class="sponsor-item">
              <img src="${sponsor.logo}" alt="${sponsor.name}" class="sponsor-logo">
              <div class="sponsor-name">${sponsor.name}</div>
            </a>
          `)}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaSponsors.tag, NooaSponsors);

