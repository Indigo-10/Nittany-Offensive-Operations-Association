/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-news-grid`
 * News article grid component
 * 
 * @demo index.html
 * @element nooa-news-grid
 */
export class NooaNewsGrid extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-news-grid";
  }

  constructor() {
    super();
    this.articles = [
      { title: "67", date: "11/30/25", excerpt: "67" },
      { title: "67", date: "11/30/25", excerpt: "67" },
      { title: "67", date: "11/30/25", excerpt: "67" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      articles: { type: Array }
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
      .news-grid {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: var(--ddd-spacing-2);
        width: 100%;
        justify-items: center;
      }
      .article-card {
        background-color: var(--ddd-theme-default-white);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-3);
        box-shadow: var(--ddd-boxShadow-sm);
        transition: box-shadow 0.3s ease;
        aspect-ratio: 1;
        width: 100%;
        max-width: 380px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }
      @media (max-width: 900px) {
        .news-grid {
          grid-template-columns: repeat(2, 1fr);
        }
        .article-card {
          max-width: 300px;
        }
      }
      @media (max-width: 600px) {
        .news-grid {
          grid-template-columns: 1fr;
        }
      }
      .article-card:hover {
        box-shadow: var(--ddd-boxShadow-md);
      }
      .article-title {
        font-size: var(--ddd-font-size-xl);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-error);
        margin-bottom: var(--ddd-spacing-2);
      }
      .article-date {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-coalyGray);
        margin-bottom: var(--ddd-spacing-2);
      }
      .article-excerpt {
        font-size: var(--ddd-font-size-m);
        color: var(--ddd-theme-default-coalyGray);
        line-height: 1.5;
      }
    `];
  }

  render() {
    return html`
      <div class="news-grid">
        ${this.articles.map(article => html`
          <div class="article-card">
            <div class="article-title">${article.title}</div>
            <div class="article-date">${article.date}</div>
            <div class="article-excerpt">${article.excerpt}</div>
          </div>
        `)}
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaNewsGrid.tag, NooaNewsGrid);

