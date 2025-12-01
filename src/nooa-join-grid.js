/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-join-grid`
 * Click to join grid component
 * 
 * @demo index.html
 * @element nooa-join-grid
 */
export class NooaJoinGrid extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-join-grid";
  }

  constructor() {
    super();
    this.joinItems = [
      { title: "Network Penetration Test", description: "Identify vulnerabilities in your network infrastructure before attackers do.", action: "network-pentest" },
      { title: "Web Application Test", description: "Comprehensive security assessment of your web applications and APIs.", action: "webapp-test" },
      { title: "Red Team", description: "Full-scope adversary simulation to test your organization's defenses.", action: "red-team" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      joinItems: { type: Array }
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
      .join-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--ddd-spacing-2);
        width: 100%;
        justify-items: center;
      }
      .join-card {
        background-color: var(--ddd-theme-default-error);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-3);
        text-align: center;
        cursor: pointer;
        transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
        box-shadow: var(--ddd-boxShadow-sm);
        aspect-ratio: 1;
        width: 100%;
        max-width: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 900px) {
        .join-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .join-card {
          max-width: 300px;
        }
      }
      @media (max-width: 600px) {
        .join-grid {
          grid-template-columns: 1fr;
        }
      }
      .join-card:hover {
        transform: translateY(-4px);
        box-shadow: var(--ddd-boxShadow-md);
        background-color: var(--ddd-theme-default-nittanyNavy);
      }
      .join-title {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-roarLight);
        margin-bottom: var(--ddd-spacing-2);
      }
      .join-description {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-roarLight);
        margin-bottom: var(--ddd-spacing-3);
        line-height: 1.4;
      }
      .learn-more-btn {
        background-color: var(--ddd-theme-default-roarLight);
        color: var(--ddd-theme-default-error);
        border: none;
        border-radius: var(--ddd-radius-sm);
        padding: var(--ddd-spacing-2) var(--ddd-spacing-4);
        font-size: var(--ddd-font-size-s);
        font-weight: var(--ddd-font-weight-bold);
        cursor: pointer;
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      .join-card:hover .learn-more-btn {
        background-color: var(--ddd-theme-default-error);
        color: var(--ddd-theme-default-roarLight);
      }
    `];
  }

  handleJoin(e, action) {
    this.dispatchEvent(new CustomEvent('join-click', {
      detail: { action },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="join-grid">
        ${this.joinItems.map(item => html`
          <div class="join-card" @click="${(e) => this.handleJoin(e, item.action)}">
            <div class="join-title">${item.title}</div>
            <div class="join-description">${item.description}</div>
            <button class="learn-more-btn">Learn More</button>
          </div>
        `)}
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaJoinGrid.tag, NooaJoinGrid);

