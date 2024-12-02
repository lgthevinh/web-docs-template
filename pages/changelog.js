import { LitElement, html } from 'https://cdn.jsdelivr.net/gh/lit/dist@3/core/lit-core.min.js';
import { getChangeLog } from '/controllers/localService.js';

class Changelog extends LitElement {

  constructor() {
    super();
    this.changelog = getChangeLog();
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`
      <h1 class="text-4xl font-semibold">Change log</h1>
      <div class="divider"></div>
    `;
  }
}

customElements.define('changelog-page', Changelog);