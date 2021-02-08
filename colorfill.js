function colorfill(options) {
    let text = document.querySelector('.text');

    if (options.color === 'default')
    options.color = '#D9269A';
    
    else {
        options.color = options.color;
    }

    text.forEach((elem => {
        elem.style.color = options.color;
    }))
}

module.exports.colorfill = colorfill;