/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-schedule`
 * Schedule component
 * 
 * @demo index.html
 * @element nooa-schedule
 */
export class NooaSchedule extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-schedule";
  }

  constructor() {
    super();
    this.scheduleItems = [
      { date: "Dec 12, 2025", time: "7:00 PM", title: "Name-Your-Price: Cyber Hitman Auction", location: "IST Building 014" },
      { date: "Dec 19, 2025", time: "6:00 PM", title: "Zero-Day Christmas Sale", location: "Westgate Building 101" },
      { date: "Jan 16, 2026", time: "8:00 PM", title: "Advanced Persistent Trolling (APT) Night", location: "Virtual - Discord" },
      { date: "Jan 23, 2026", time: "7:00 PM", title: "Hackers Anonymous", location: "IST Building 014" },
      { date: "Feb 6, 2026", time: "6:30 PM", title: "Incident Response Bingo", location: "Westgate Building 101" },
      { date: "Feb 20, 2026", time: "7:00 PM", title: "Living Off the Frat Land", location: "TBD - Check Discord" }
    ];
  }

  static get properties() {
    return {
      ...super.properties,
      scheduleItems: { type: Array }
    };
  }

  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
      }
      .schedule-container {
        padding: var(--ddd-spacing-4);
        max-width: 1200px;
        margin: 0 auto;
      }
      h2 {
        font-size: var(--ddd-font-size-2xl);
        color: var(--ddd-theme-default-error);
        margin-bottom: var(--ddd-spacing-6);
        text-align: center;
      }
      .schedule-list {
        display: flex;
        flex-direction: column;
        gap: var(--ddd-spacing-4);
      }
      .schedule-item {
        background-color: var(--ddd-theme-default-white);
        border: var(--ddd-border-md);
        border-radius: var(--ddd-radius-md);
        padding: var(--ddd-spacing-4);
        display: grid;
        grid-template-columns: 150px 100px 1fr 200px;
        gap: var(--ddd-spacing-4);
        align-items: center;
        box-shadow: var(--ddd-boxShadow-sm);
        transition: box-shadow 0.3s ease;
      }
      .schedule-item:hover {
        box-shadow: var(--ddd-boxShadow-md);
      }
      .schedule-date {
        font-weight: var(--ddd-font-weight-bold);
        color: var(--ddd-theme-default-error);
      }
      .schedule-time {
        color: var(--ddd-theme-default-error);
        font-weight: var(--ddd-font-weight-medium);
      }
      .schedule-title {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-medium);
        color: var(--ddd-theme-default-coalyGray);
      }
      .schedule-location {
        font-size: var(--ddd-font-size-s);
        color: var(--ddd-theme-default-coalyGray);
        text-align: right;
      }
      
      /* Mobile styles */
      @media (max-width: 768px) {
        .schedule-item {
          grid-template-columns: 1fr;
          gap: var(--ddd-spacing-2);
        }
        .schedule-location {
          text-align: left;
        }
      }
    `];
  }

  render() {
    return html`
      <div class="schedule-container">
        <h2>Upcoming Events</h2>
        <div class="schedule-list">
          ${this.scheduleItems.map(item => html`
            <div class="schedule-item">
              <div class="schedule-date">${item.date}</div>
              <div class="schedule-time">${item.time}</div>
              <div class="schedule-title">${item.title}</div>
              <div class="schedule-location">${item.location}</div>
            </div>
          `)}
        </div>
      </div>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaSchedule.tag, NooaSchedule);
