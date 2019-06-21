# fa-icon

An optimized [FontAwesome 5](https://fontawesome.com/) icons for the [Polymer 3](https://www.polymer-project.org/).

[![license](https://camo.githubusercontent.com/11ad3ffb000cd7668567587af947347c738b6472/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f657870726573732e7376673f7374796c653d666c61742d737175617265266d61784167653d33363030)](http://opensource.org/licenses/MIT)

## Installation

```bash
npm install fa-icons
```

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

We have test it with node >= 10. We will support and build hemera on even Nodejs versions that are current or in maintenance.

## License

Unless otherwise noted, the fa-icon source files are distributed under the MIT license found in the LICENSE file.

## Sponsorship

Development of the fa-icon is currently sponsored by [ObsidianSoft](https://obsidiansoft.io/) and generously supported by contributions from individuals.
