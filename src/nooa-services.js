/**
 * Copyright 2025 Indigo-10
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";

/**
 * `nooa-services`
 * Services page for Nittany Offensive Operations Association
 * 
 * @demo index.html
 * @element nooa-services
 */
export class NooaServices extends DDDSuper(LitElement) {

  static get tag() {
    return "nooa-services";
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
      }
      .page-header {
        text-align: center;
        padding: var(--ddd-spacing-8) var(--ddd-spacing-4);
        background-color: var(--ddd-theme-default-nittanyNavy);
        color: var(--ddd-theme-default-roarLight);
      }
      .page-header h1 {
        font-size: var(--ddd-font-size-3xl);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-2);
      }
      .page-header p {
        font-size: var(--ddd-font-size-m);
        opacity: 0.9;
      }
      .service-section {
        padding: var(--ddd-spacing-10) var(--ddd-spacing-4);
      }
      .service-section.beige {
        background-color: var(--ddd-theme-default-roarLight);
      }
      .service-section.red {
        background-color: var(--ddd-theme-default-error);
        color: var(--ddd-theme-default-roarLight);
      }
      .service-inner {
        max-width: 1000px;
        margin: 0 auto;
      }
      .service-title {
        font-size: var(--ddd-font-size-2xl);
        font-weight: var(--ddd-font-weight-bold);
        margin-bottom: var(--ddd-spacing-4);
      }
      .service-section.beige .service-title {
        color: var(--ddd-theme-default-error);
      }
      .service-section.red .service-title {
        color: var(--ddd-theme-default-roarLight);
      }
      .service-content {
        font-size: var(--ddd-font-size-m);
        line-height: 1.8;
      }
      .service-section.beige .service-content {
        color: var(--ddd-theme-default-coalyGray);
      }
      .service-section.red .service-content {
        color: var(--ddd-theme-default-roarLight);
      }
      .service-content p {
        margin-bottom: var(--ddd-spacing-4);
      }
      .service-content h3 {
        font-size: var(--ddd-font-size-l);
        font-weight: var(--ddd-font-weight-bold);
        margin-top: var(--ddd-spacing-6);
        margin-bottom: var(--ddd-spacing-3);
      }
      .service-section.beige .service-content h3 {
        color: var(--ddd-theme-default-nittanyNavy);
      }
      .service-content ul {
        margin-left: var(--ddd-spacing-6);
        margin-bottom: var(--ddd-spacing-4);
      }
      .service-content li {
        margin-bottom: var(--ddd-spacing-2);
      }
      
      /* Mobile styles */
      @media (max-width: 768px) {
        .page-header {
          padding: var(--ddd-spacing-6) var(--ddd-spacing-3);
        }
        .page-header h1 {
          font-size: var(--ddd-font-size-2xl);
        }
        .service-section {
          padding: var(--ddd-spacing-6) var(--ddd-spacing-3);
        }
        .service-title {
          font-size: var(--ddd-font-size-xl);
        }
      }
    `];
  }

  firstUpdated() {
    // Handle scroll to section based on hash
    this.scrollToHash();
    window.addEventListener('hashchange', () => this.scrollToHash());
  }

  scrollToHash() {
    const hash = window.location.hash;
    if (hash) {
      const element = this.shadowRoot.querySelector(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }

  render() {
    return html`
      <div class="page-header">
        <h1>Our Services</h1>
        <p>Professional cybersecurity services by Penn State's finest</p>
      </div>

      <!-- Red Team Section -->
      <section id="red-team" class="service-section beige">
        <div class="service-inner">
          <h2 class="service-title">Red Team Operations</h2>
          <div class="service-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <h3>What We Offer</h3>
            <ul>
              <li>Full-scope adversary simulation to test your organization's defenses</li>
              <li>Advanced persistent threat (APT) emulation</li>
              <li>Physical security assessments</li>
              <li>Social engineering campaigns</li>
              <li>Comprehensive reporting with actionable recommendations</li>
            </ul>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
        </div>
      </section>

      <!-- Network Penetration Test Section -->
      <section id="network-pentest" class="service-section red">
        <div class="service-inner">
          <h2 class="service-title">Network Penetration Testing</h2>
          <div class="service-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <h3>Our Approach</h3>
            <ul>
              <li>Identify vulnerabilities in your network infrastructure before attackers do</li>
              <li>External and internal network assessments</li>
              <li>Wireless network security testing</li>
              <li>Firewall and IDS/IPS evasion testing</li>
              <li>Active Directory security assessments</li>
            </ul>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
        </div>
      </section>

      <!-- Web Application Test Section -->
      <section id="webapp-test" class="service-section beige">
        <div class="service-inner">
          <h2 class="service-title">Web Application Testing</h2>
          <div class="service-content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <h3>Testing Coverage</h3>
            <ul>
              <li>Comprehensive security assessment of your web applications and APIs</li>
              <li>OWASP Top 10 vulnerability testing</li>
              <li>Authentication and authorization testing</li>
              <li>API security assessments</li>
              <li>Source code review (optional)</li>
            </ul>
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.
            </p>
          </div>
        </div>
      </section>
    `;
  }

  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url).href;
  }
}

globalThis.customElements.define(NooaServices.tag, NooaServices);

