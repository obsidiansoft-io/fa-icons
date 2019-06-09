# fa-icon
FontAwesome icons for polymer-3
#### Propiedades
Property | description | type
------------ | ------------- | -------------
color | Color of icono | String / color
src (optional) | Sprite del svg de FontAwesome and another resource | String /URL
style | styles | String/StylesInline
size | size of icons| CSS Numbers
class | class of fontawesome |String /HTMLClass

#### Ejemplo
```html
<!--only  iclass y style-->
<fa-icon class="fal fa-envelope" style="fill: #2980B9;height: 2em;width: 2em;"></fa-icon>

<!--only iclass , style, color y size-->
<fa-icon class="fal fa-envelope" color="#2980B9" size="2em"></fa-icon>
```