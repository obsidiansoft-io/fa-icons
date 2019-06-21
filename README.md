# fa-icon

Optimized FontAwesome icons for polymer-3

## Properties

Property | Description | Type
------------ | ------------- | -------------
`color` | Color of icon | String / color
`src` (optional) | Sprite del svg de FontAwesome and another resource | String /URL
`style` | styles | String/StylesInline
`size` | size of icon| CSS Numbers
`class` | class of fontawesome |String /HTMLClass

## Example

```html
<!--only  iclass y style-->
<fa-icon class="fal fa-envelope" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>

<!--only iclass , style, color y size-->
<fa-icon class="fal fa-envelope" color="#2980B9" size="2em"></fa-icon>
```

## Usage with LitElement

<aside class="notice">
🚨Polymer element is deprecated.
</aside>

```javascript
import { LitElement, html} from 'lit-element';
import'fa-icons';
class SomeClass extends LitElement {
 render() {
    return html`
      <div>
         <fa-icon class="fal fa-envelope" color="#2980B9" size="2em"></fa-icon>
      </div>
    `;
  }
}
customElements.define('custom-component', SomeClass );
```

## Supported Node Versions

We have test with node >=10

## License

Unless otherwise noted, the fa-icon source files are distributed under the MIT license found in the LICENSE file.
