/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-stat-display`
 * Stat display component
 * 
 * @demo index.html
 * @element nooa-stat-display
 */
export class NooaStatDisplay extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-stat-display";
  }

  constructor() {
    super();
    this.stats = [
      { label: "Total Members", value: "69" },
      { label: "Active Events", value: "21" },
      { label: "Completed Projects", value: "67" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      stats: { type: Array }
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
      .stats-container {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--ddd-spacing-4);
        width: 100%;
      }
      .stat-card {
        background-color: var(--ddd-theme-default-white);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-6);
        text-align: center;
        box-shadow: var(--ddd-boxShadow-sm);
      }
      .stat-value {
        font-size: var(--ddd-font-size-3xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-error);
        margin-bottom: var(--ddd-spacing-2);
      }
      .stat-label {
        font-size: var(--ddd-font-size-m);
        color: var(--ddd-theme-default-coalyGray);
      }
      
      /* Mobile styles */
      @media (max-width: 700px) {
        .stats-container {
          grid-template-columns: 1fr;
        }
      }
    `];
  }

  render() {
    return html`
      <div class="stats-container">
        ${this.stats.map(stat => html`
          <div class="stat-card">
            <div class="stat-value">${stat.value}</div>
            <div class="stat-label">${stat.label}</div>
          </div>
        `)}
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaStatDisplay.tag, NooaStatDisplay);
