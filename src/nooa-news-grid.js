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
      { 
        title: "Student cybersecurity team places third in global competition", 
        date: "January 22, 2025", 
        excerpt: "The Penn State Competitive Cyber Security Organization (CCSO) placed third at the Global Collegiate Penetration Testing Competition — CCSO's best showing in 10 years of this competition series.",
        url: "https://www.psu.edu/news/information-sciences-and-technology/story/student-cybersecurity-team-places-third-global"
      },
      { 
        title: "Inaugural Red vs. Blue cybersecurity competition held at University Park", 
        date: "September 25, 2025", 
        excerpt: "CCSO hosted its first full-scale Red vs. Blue cybersecurity competition — a live, hands-on event pitting attackers against defenders to replicate a real-world cyberattack experience.",
        url: "https://ist.psu.edu/news/inaugural-red-vs-blue-cybersecurity-competition-held-at-university-park"
      },
      { 
        title: "IST students win top spots at social engineering competition", 
        date: "May 9, 2024", 
        excerpt: "Two teams from the College of IST's Competitive Cyber Security Organization placed first and third in the 2024 Social Engineering Competition hosted by CARE Lab at Temple University.",
        url: "https://www.psu.edu/news/information-sciences-and-technology/story/ist-students-win-top-spots-social-engineering-competition"
      }
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
        background-color: var(--nooa-card-bg, var(--ddd-theme-default-white));
        border: var(--ddd-border-md);
        border-color: var(--nooa-card-border, var(--ddd-theme-default-limestoneLight));
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-3);
        box-shadow: var(--ddd-boxShadow-sm);
        transition: box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        width: 100%;
        max-width: 380px;
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: inherit;
        cursor: pointer;
      }
      .article-card:hover {
        box-shadow: var(--ddd-boxShadow-md);
      }
      .article-title {
        font-size: var(--ddd-font-size-m);
        font-weight: var(--ddd-font-weight-bold);
        color: var(--nooa-accent, var(--ddd-theme-default-error));
        margin-bottom: var(--ddd-spacing-2);
        line-height: 1.3;
        transition: color 0.3s ease;
      }
      .article-date {
        font-size: var(--ddd-font-size-s);
        color: var(--nooa-text-secondary, var(--ddd-theme-default-slateGray));
        margin-bottom: var(--ddd-spacing-2);
        transition: color 0.3s ease;
      }
      .article-excerpt {
        font-size: var(--ddd-font-size-s);
        color: var(--nooa-text-primary, var(--ddd-theme-default-coalyGray));
        line-height: 1.5;
        flex: 1;
        transition: color 0.3s ease;
      }
      .read-more {
        font-size: var(--ddd-font-size-s);
        color: var(--nooa-link, var(--ddd-theme-default-nittanyNavy));
        font-weight: var(--ddd-font-weight-bold);
        margin-top: var(--ddd-spacing-3);
        transition: color 0.3s ease;
      }
      .article-card:hover .read-more {
        text-decoration: underline;
      }
      
      /* Mobile styles */
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
    `];
  }

  render() {
    return html`
      <div class="news-grid">
        ${this.articles.map(article => html`
          <a href="${article.url}" class="article-card" target="_blank" rel="noopener">
            <div class="article-title">${article.title}</div>
            <div class="article-date">${article.date}</div>
            <div class="article-excerpt">${article.excerpt}</div>
            <div class="read-more">Read More →</div>
          </a>
        `)}
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaNewsGrid.tag, NooaNewsGrid);
