## What is this? 

Colorfilljs is a lightweight text fill animation tool using the power of javascript. It automatically generates your css on whatever pages you wish to include it. Use colorfill on links, titles, or randomly throughout your web app to make your text stand out.

You could definitely use css directly in a file, however having the program do the animations based on different configurations on every page would require lots of different css files. Colorfill allows you to have full control over these styles on any given page.

## Installation

` npm i colorfilljs --save `

Then add your html & js...

```
<h1 class="colorfill-text"><span class="colorfill" data-content="colorfill" aria-hidden="true"></span>colorfill</h1>
```

```
import { colorfilljs } from 'colorfilljs';

colorfilljs({
  textColor: '#3778cd',
  fillColor: '#5e01e9',
  cursor: 'pointer',
  positionOne: 'translateY(100%)',
  positionTwo: 'translateY(-100%)',
  positionThree: 'translateY(0)',
  duration: '1s',
  timing: 'ease-in-out'
})
```
or set as default

```
colorfilljs('')
```

Use it on any page and render entirely different fill animations

```

<h1 class="colorfill-text"><span class="colorfill" data-content="colorfill" aria-hidden="true"></span>colorfill</h1>

<script src="/linktoyourcolorfillfile"></script>
<script>
colorfilljs({
  textColor: '#27285D',
  fillColor: '#D13D78',
  cursor: 'pointer',
  positionOne: 'translateY(100%)',
  positionTwo: 'translateY(-100%)',
  positionThree: 'translateY(0)',
  duration: '1s',
  timing: 'ease-in-out'
})
</script>
```

Then, for example...

```
parcel index.html
```
## Configuration
You can configure your own colorfill at the colorfill [codepen](https://codepen.io/christianmartinez/pen/KKgyywR)

Colorfilljs takes a maximum of 8 arguments (all mentioned in the above example). If any are left blank, it will use defaults.

