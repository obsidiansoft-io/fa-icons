# fa-icons

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
`path-prefix` (optional) | String | Prefix of path for universal use (Default node_modules) [refer](https://github.com/obsidiansoft-io/fa-icon/pull/2#issue-296521774)
`style` | String | Styles, must follow the StylesInline standard
`size` | String | Size of icon, in CSS number notation
`class` | String | FontAwesome class, must follow HTMLClass standard

## Example

```html
<!--only class & style-->
<fa-icon class="fas fa-address-card" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>

<!--only class, style, color & size-->
<fa-icon class="fas fa-address-card" color="#2980B9" size="2em"></fa-icon>
```

## Usage with LitElement

🚨 We don't advise the use with Polymer Element because it's deprecated.

```javascript
import { LitElement, html} from 'lit-element';
import 'fa-icons';

class SomeClass extends LitElement {
 render() {
    return html`
      <div>
         <fa-icon class="fas fa-address-card" color="#2980B9" size="2em"></fa-icon>
      </div>
    `;
  }
}

customElements.define('custom-component', SomeClass );
```

## Supported Node Versions

We have test it with node >= 10. We will support on even Nodejs versions that are current or in maintenance.

## License

Unless otherwise noted, the fa-icon source files are distributed under the MIT license found in the LICENSE file.

## Sponsorship

Development of the fa-icons is currently sponsored by [ObsidianSoft](https://obsidiansoft.io/) and generously supported by contributions from individuals.

## Translations

This readme is available in the following translations:

- [Spanish :es:](translations/README.spanish.md) (:pray: [@obsidiansoft-io](https://github.com/obsidiansoft-io))

## Preview element

To visualize the element demo, simply run:

```
$ polymer serve
```

And navigate to `/demo/` in the URL that the Polymer CLI indicates. Usually, it is `127.0.0.1:8081`.

E.g.: `127.0.0.1:8081/demo`

## Testing element

To correctly test the element individually, you require:

* Polymer-CLI
* Google Chrome

To test, simply run:

```
$ npm run test
```

Or:

```
$ polymer serve
```

And navigate to the `/test/` URL path in your web browser.