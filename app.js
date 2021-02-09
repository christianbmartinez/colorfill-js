function colorfilljs(options) {

    const style = document.createElement('style');

    style.innerHTML = `     
   .colorfill-text {
     color: ${options.textColor ? options.textColor : '#D9269A'};
     cursor: ${options.cursor ? options.cursor : 'default'};
     width: 100%;
   }
   
   span.colorfill {
     position: absolute;
     overflow: hidden;
     transform:  ${options.positionOne ? options.positionOne : 'translateX(-100%)'};
     transition: transform ${options.duration ? options.duration : '0.75s'} ${options.timing ? options.timing : 'ease-in-out'};
   }
   
   h1:hover span.colorfill, h2:hover span.colorfill, h3:hover span.colorfill,
   h4:hover span.colorfill, h5:hover span.colorfill, h6:hover span.colorfill,
   a:hover span.colorfill, p:hover span.colorfill {
     transform: ${options.positionThree ? options.positionThree : 'translateX(0)'};   
   }
   
   span.colorfill::before { 
     display: inline-block;
     color: ${options.fillColor ? options.fillColor : '#161A3C'};
     content: attr(data-content);
     transform: ${options.positionTwo ? options.positionTwo : 'translateX(100%)'};
     transition: ${options.duration ? options.duration : '0.75s'} ${options.timing ? options.timing : 'ease-in-out'};
   }
   
   h1:hover span.colorfill::before, h2:hover span.colorfill::before, h3:hover span.colorfill::before,
   h4:hover span.colorfill::before, h5:hover span.colorfill::before, h6:hover span.colorfill::before,
   a:hover span.colorfill::before, p:hover span.colorfill::before {
     transform: ${options.positionThree ? options.positionThree : 'translateX(0)'};   
   }`;

    document.getElementsByTagName('head')[0].appendChild(style);
}

module.exports.colorfilljs = colorfilljs;