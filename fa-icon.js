import { LitElement, html, css } from 'lit-element';

class FaIcon extends LitElement {
  static get properties() {
    return {
      color: String,
      iClass: { attribute: 'class' },
      src: String,
      style: String,
      size: Number
    };
  }
  static get styles() {
    return css`
      :host {
        display: inline-block;
        padding: 0;
        margin: 0;
      }
    `;
  }

  getSources(className) {
    const PREFIX_TO_STYLE = {
      fas: 'solid',
      far: 'regular',
      fal: 'light',
      fab: 'brands',
      fa: 'solid'
    };
    const getPrefix = iClass => {
      let data = iClass.split(' ');
      return [PREFIX_TO_STYLE[data[0]], normalizeIconName(data[1])];
    };
    const normalizeIconName = name => {
      let icon = name.replace('fa-', '');
      return icon;
    };
    let data = getPrefix(className);
    return `node_modules/@fortawesome/fontawesome-free/sprites/${data[0]}.svg#${
      data[1]
    }`;
  }
  constructor() {
    super();
    this.iClass = '';
    this.src = '';
    this.style = '';
    this.size = 19;
    this.color = '#000';
  }
  firstUpdated() {
    this.src = this.getSources(this.iClass);
  }
  render() {
    return html`
      <div class="fa-icon">
        <svg
          style=" width:${this.size};  height: ${this.size}; fill: ${this
            .color}; ${this.style}"
        >
          <use href="${this.src}"></use>
        </svg>
      </div>
    `;
  }
}
customElements.define('fa-icon', FaIcon);
