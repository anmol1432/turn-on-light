console.log('loaded...')
let button = document.querySelector('#power')
let moon = document.querySelector('#moon')

let on_Off_light = () => {
    if (button.style.color === '#ff1414') {
        moon.style.backgroundColor = 'transparent';
    }
    else if (button.style.color === 'green') {
        moon.style.fill = 'none';
        button.style.color = '#ff1414';
    }
    else {
        moon.style.fill = 'yellow';
        button.style.color = 'green';
    }

}

button.addEventListener('click', on_Off_light);
