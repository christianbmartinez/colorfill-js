## What is this? 

Colorfilljs is a lightweight text fill animation tool using the power of javascript. It automatically generates your css on whatever pages you wish to include it. Use colorfill on links, titles, or randomly throughout your web app to make your text stand out.

## Installation

` npm i colorfilljs --save `

Then...

```
import { colorfilljs } from 'colorfilljs';

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
```
or set as default

```
colorfilljs('')
```

# Configuration
You can configure your own colorfill at the colorfill [codepen](https://codepen.io/christianmartinez/pen/KKgyywR)

Colorfill takes a maximum of 8 arguments (all mentioned in the above example). If any are left blank, it will use defaults.

