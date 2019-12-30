import { LitElement, html, css } from "lit-element";

class FaIcon extends LitElement {
  static get properties() {
    return {
      color: String,
      iClass: { attribute: "class" },
      src: String,
      style: String,
      size: String,
      pathPrefix: { attribute: "path-prefix" }
    };
  }
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
      :host svg {
        fill: var(--fa-icon-fill-color, currentcolor);
        width: var(--fa-icon-width, 19px);
        height: var(--fa-icon-height, 19px);
      }
    `;
  }

  getSources(className) {
    const PREFIX_TO_STYLE = {
      fas: "solid",
      far: "regular",
      fal: "light",
      fab: "brands",
      fa: "solid"
    };
    const getPrefix = iClass => {
      let data = iClass.split(" ");
      return [PREFIX_TO_STYLE[data[0]], normalizeIconName(data[1])];
    };
    const normalizeIconName = name => {
      let icon = name.replace("fa-", "");
      return icon;
    };
    let data = getPrefix(className);
    return `${this.pathPrefix}/@fortawesome/fontawesome-free/sprites/${data[0]}.svg#${data[1]}`;
  }
  constructor() {
    super();
    this.iClass = "";
    this.src = "";
    this.style = "";
    this.size = "";
    this.color = "";
    this.pathPrefix = "node_modules";
  }
  firstUpdated() {
    this.src = this.getSources(this.iClass);
  }
  _parseStyles() {
    return `
      ${this.size ? `width: ${this.size};` : ''}
      ${this.size ? `height: ${this.size};` : ''}
      ${this.color ? `fill: ${this.color};` : ''}
      ${this.style}
    `;
  }
  render() {
    return html`
      <svg 
        .style="${this._parseStyles()}">
        <use 
          href="${this.src}">
        </use>
      </svg>
    `;
  }
}
customElements.define("fa-icon", FaIcon);
