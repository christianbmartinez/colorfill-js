function colorfillJs(options) {
    let text = document.querySelectorAll('.text');

    if (options.color === 'default') {
        options.color = 'red';
    } else {
        options.color = options.color;
    }

    text.forEach(elem => {
        elem.style.color = options.color;
    })
}

module.exports.colorfillJs = colorfillJs;