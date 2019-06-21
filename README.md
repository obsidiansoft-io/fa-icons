# fa-icon

Optimized FontAwesome 5 icons for Polymer 3

## Properties

Property | Type | Description
------------ | ------------- | -------------
`color` | String | Icon color, must be an hex color
`src` (optional) | String | SVG Sprite of FontAwesome and other resources, must be a valid URL
`style` | String | Styles, nust follow the StylesInline standard
`size` | String | Size of icon, in CSS number notation
`class` | String | FontAwesome class, most follow HTMLClass standard

## Example

```html
<!--only iclass & style-->
<fa-icon class="fal fa-envelope" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>

<!--only iclass, style, color & size-->
<fa-icon class="fal fa-envelope" color="#2980B9" size="2em"></fa-icon>
```

## Usage with LitElement

🚨 No support for Polymer element because it's deprecated.

```javascript
import { LitElement, html} from 'lit-element';
import 'fa-icons';

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

We have test it with node >= 10.

## License

Unless otherwise noted, the fa-icon source files are distributed under the MIT license found in the LICENSE file.
