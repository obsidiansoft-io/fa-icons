# fa-icons

Componente para cargar iconos optimizados de [FontAwesome 5](https://fontawesome.com/) para [Polymer 3](https://www.polymer-project.org/).

[![license](https://camo.githubusercontent.com/11ad3ffb000cd7668567587af947347c738b6472/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f657870726573732e7376673f7374796c653d666c61742d737175617265266d61784167653d33363030)](http://opensource.org/licenses/MIT)

## Instalación

```bash
npm install fa-icons
```

## Propiedades

Propiedad | Tipo | Descripcion
------------ | ------------- | -------------
`color` | String | Color del icono, debe de ser un código hexadecimal valido
`src` (optional) | String | SVG Sprite de FontAwesome o de otros recursos, debe de ser una URL valida
`path-prefix` (optional) | String | Prefijo de la ruta para uso universal (Default node_modules) [refer](https://github.com/obsidiansoft-io/fa-icon/pull/2#issue-296521774)
`style` | String | Styles, debe seguir el estandard de StylesInline
`size` | String | Tamaño del icon, en CSS con notación numérica
`class` | String | Clase de FontAwesome, debe de seguir el estandard de HTMLClass

## Ejemplo

```html
<!--solo iclass & style-->
<fa-icon class="fal fa-envelope" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>

<!--solo iclass, style, color & size-->
<fa-icon class="fal fa-envelope" color="#2980B9" size="2em"></fa-icon>
```

## Uso con LitElement

🚨 No recomendamos el uso con Polymer Element porque este esta obsoleto.

```javascript
import { LitElement, html} from 'lit-element';
import 'fa-icons';

class CualquierClase extends LitElement {
 render() {
    return html`
      <div>
         <fa-icon class="fal fa-envelope" color="#2980B9" size="2em"></fa-icon>
      </div>
    `;
  }
}

customElements.define('custom-component', CualquierClase );
```

## Versiones de Node soportadas

Lo hemos probado con node >= 10. Se dara soporte en las versiones de Node LTS y actuales.

## Licencia

A menos que se indique lo contrario, los archivos fuente de fa-icons se distribuyen bajo la licencia MIT que se encuentra en el archivo LICENSE.

## Patrocinio

El desarrollo del icono de fa-icons está patrocinado por [ObsidianSoft](https://obsidiansoft.io/) y está respaldado generosamente por contribuciones de individuos.

## Traducciones

Este readme está disponible en las siguientes traducciones:

- [Ingles :us:](README.md) (:pray: [@obsidiansoft-io](https://github.com/obsidiansoft-io))

## Previsualizar el elemento

Para ver una pequeña demostración, basta con ejecutar:

```
$ polymer serve
```

E ir a la ruta `/demo/` de la URL que indica Polymer CLI. Comunmente es: `127.0.0.1:8081`.

Ejemplo: `127.0.0.1:8081/demo`

## Tests unitarios

Para correr los test unitarios, se requiere tener instalado:

* Polymer-CLI
* Google Chrome

Para ejecutar los test, basta correr:

```
$ npm run test
```

Ó:

```
$ polymer serve
```

Y navegar hacia la ruta `/test/` en el navegador del componente servido.