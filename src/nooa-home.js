/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import "./nooa-banner.js";
import "./nooa-news-grid.js";
import "./nooa-join-grid.js";
import "./nooa-stat-display.js";
import "./nooa-sponsors.js";

/**
 * `nooa-home`
 * Home page for Nittany Offensive Operations Association
 * 
 * @demo index.html
 * @element nooa-home
 */
export class NooaHome extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-home";
  }

  constructor() {
    super();
  }

  static get properties() {
    return {
      ...super.properties,
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        width: 100%;
        max-width: 100vw;
        overflow-x: hidden;
      }
      .section {
        width: 100%;
        max-width: 100vw;
        padding: var(--ddd-spacing-6) 0;
        overflow: hidden;
      }
      .section-inner {
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 var(--ddd-spacing-4);
        box-sizing: border-box;
      }
      .section.hero .section-inner {
        padding: 0;
        max-width: 100%;
      }
      .section-title {
        text-align: center;
        color: var(--ddd-theme-default-error);
        font-size: var(--ddd-font-size-2xl);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-4);
        width: 100%;
        display: block;
      }
      .section.news {
        background-color: var(--ddd-theme-default-roarLight);
      }
      .section.join {
        background-color: var(--ddd-theme-default-white);
      }
      .section.stats {
        background-color: var(--ddd-theme-default-roarLight);
      }
      .section.sponsors {
        background-color: var(--ddd-theme-default-white);
      }
      
      /* Mobile styles */
      @media (max-width: 768px) {
        .section {
          padding: var(--ddd-spacing-4) 0;
        }
        .section-inner {
          padding: 0 var(--ddd-spacing-3);
        }
        .section-title {
          font-size: var(--ddd-font-size-xl);
        }
      }
    `];
  }

  render() {
    return html`
      <!-- Hero Banner -->
      <div class="section hero">
        <div class="section-inner">
          <nooa-banner 
            title="We Pwn. You Prosper."
            subtitle="Nittany Offensive Operations Association — proudly tormenting blue teams and developers since day one"
            cta-text="Get Started"
            image-url="/assets/NOOA_War_Room_With_Logo.jpg">
          </nooa-banner>
        </div>
      </div>

      <!-- Services Grid -->
      <div class="section join">
        <div class="section-inner">
          <h2 class="section-title">View Our Services</h2>
          <nooa-join-grid></nooa-join-grid>
        </div>
      </div>

      <!-- News Article Grid -->
      <div class="section news">
        <div class="section-inner">
          <h2 class="section-title">NOOA NEWS</h2>
          <nooa-news-grid></nooa-news-grid>
        </div>
      </div>

      <!-- Stat Display -->
      <div class="section stats">
        <div class="section-inner">
          <nooa-stat-display></nooa-stat-display>
        </div>
      </div>

      <!-- Sponsors/Clients -->
      <div class="section sponsors">
        <div class="section-inner">
          <nooa-sponsors></nooa-sponsors>
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaHome.tag, NooaHome);
